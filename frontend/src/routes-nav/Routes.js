import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Home from "../homepage/Home";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import Companies from "../companies/Companies";
import CompanyDetails from "../companies/CompanyDetails";
import Jobs from "../jobs/Jobs";
import Profile from "../profiles/Profile";
import NavBar from "./NavBar";
import JoblyApi from "../api/api";
import CurrUserContext from "../auth/CurrUserContext";
import useLocalStorageState from "../hooks/useLocalStorageState";
import PrivateRoute from "./PrivateRoutes";
import jwt from "jsonwebtoken";
import { Spinner } from "react-spinners-css";
import "./Routes.css";

export const TOKEN_STORAGE_ID = "jobly-token";

const Router = () => {
  const [token, setToken] = useLocalStorageState(TOKEN_STORAGE_ID);
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          const res = await JoblyApi.getUser(username, token);
          setUser(res);
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setUser(null);
        }
      }
      setIsLoading(false);
    };
    setIsLoading(true);
    getUser();
  }, [token]);

  const registerUser = async (data) => {
    try {
      let res = await JoblyApi.register(data);
      setToken(res);
      return { success: true };
    } catch (err) {
      console.error("signup failed", err);
      return { success: false, err };
    }
  };

  const loginUser = async (data) => {
    try {
      let res = await JoblyApi.login(data);
      setToken(res);

      return { success: true };
    } catch (err) {
      console.error("signup failed", err);
      return { success: false, err };
    }
  };

  const update = async (username, data) => {
    try {
      let res = await JoblyApi.updateUser(username, data);
      setUser((user) => ({
        ...user,
        applications: [...user.applications, res],
      }));
    } catch (err) {
      throw err;
    }
  };

  const logoutUser = () => {
    setToken(null);
    setUser();
  };

  const apply = async (username, id) => {
    let res = await JoblyApi.applyToJob(username, id);

    setUser((user) => ({
      ...user,
      applications: [...user.applications, res],
    }));
  };
  if (isLoading)
    return (
      <div className="spinner">
        <Spinner color="red" />
      </div>
    );

  return (
    <CurrUserContext.Provider value={{ user, apply }}>
      <BrowserRouter>
        <NavBar logout={logoutUser} />

        <main className="col-md-8 offset-md-2">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signup">
              <Signup register={registerUser} />
            </Route>
            <Route exact path="/login">
              <Login login={loginUser} />
            </Route>
            <PrivateRoute exact path="/companies">
              <Companies />
            </PrivateRoute>
            <PrivateRoute exact path="/companies/:handle">
              <CompanyDetails />
            </PrivateRoute>
            <PrivateRoute exact path="/jobs">
              <Jobs />
            </PrivateRoute>
            <PrivateRoute exact path="/profile">
              <Profile update={update} />
            </PrivateRoute>
            <Redirect to="/" />
          </Switch>
        </main>
      </BrowserRouter>
    </CurrUserContext.Provider>
  );
};

export default Router;
