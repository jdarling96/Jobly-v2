import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Companies from "./Companies";
import CompanyDetails from "./CompanyDetails";
import Jobs from "./Jobs";
import Profile from "./Profile";
import NavBar from "./NavBar";
import JoblyApi from "./api";
import CurrUserContext from "./CurrUserContext";
import useLocalStorageState from "./hooks/useLocalStorageState";

const Router = () => {
  const [state, setState, setLocalStorage, clearLocalStorage] =
    useLocalStorageState("token", "user");
  const [user, setUser] = useState();
  const [loading, setIsLoading] = useState(true);

  console.log(state);
  console.log(user);
  //const [badData, setBadData] = useState()

  useEffect(() => {
    if (state.token) {
      console.log(state);
      const getUser = async (username) => {
        const res = await JoblyApi.getUser(username, state.token);
        setLocalStorage();
        setUser(res);
        setIsLoading(false);
      };
      getUser(state.user);
    } else {
      setIsLoading(false);
    }
  }, [state]);

  /*  console.log(user);
  console.log(token);
  console.log(Object.values(token).length);
  console.log(Object.values(token)) */

  const registerUser = async (data) => {
    try {
      let res = await JoblyApi.register(data);
      setState(() => ({
        user: data.username,
        token: res,
      }));
    } catch (err) {
      throw err;
    }
  };

  const loginUser = async (data) => {
    try {
      let res = await JoblyApi.login(data);
      setState(() => ({
        user: data.username,
        token: res,
      }));
    } catch (err) {
      throw err;
    }
  };

  const update = async (username, data) => {
    try {
      let res = await JoblyApi.updateUser(username, data);
      setUser(res);
    } catch (err) {
      throw err;
    }
  };

  const logoutUser = () => {
    setState({ token: "", user: "" });
    setUser();
    clearLocalStorage();

    console.log("worked");
  };

  const apply = async (username, id) => {
    let res = await JoblyApi.applyToJob(username, id)
    console.log(res)
    setUser(user => ({
        ...user,
        applications:[...user.applications, res]
    }))
  }

  return (
    <CurrUserContext.Provider value={user}>
      <BrowserRouter>
        <NavBar logout={logoutUser} />
        {loading ? null : (
          <main>
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
              <Route exact path="/companies">
                <Companies />
              </Route>
              <Route exact path="/companies/:handle">
                <CompanyDetails apply={apply} />
              </Route>
              <Route exact path="/jobs">
                <Jobs apply={apply} />
              </Route>
              <Route exact path="/profile">
                <Profile update={update} />
              </Route>
              <Route exact path="*">
                <p>Custom 404 page goes here</p>
              </Route>
            </Switch>
          </main>
        )}
      </BrowserRouter>
    </CurrUserContext.Provider>
  );
};

export default Router;
