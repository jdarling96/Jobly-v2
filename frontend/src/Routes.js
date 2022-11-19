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

const Router = () => {
  const [user, setUser] = useState();
  const [token, setToken] = useState({ token: "" });
  //const [badData, setBadData] = useState()

  useEffect(() => {
    if (token.token) {
      const getUser = async (username) => {
        const res = await JoblyApi.getUser(username);
        setUser(res);
      };
      getUser(user);
    }
  }, [token]);

  console.log(user);
  console.log(token);
  console.log(Object.values(token).length);
  console.log(Object.values(token))

  const registerUser = async (data) => {
    try {
      let res = await JoblyApi.register(data);
      setUser(data.username);
      setToken(() => ({
        token: res,
      }));
    } catch (err) {
      throw err;
    }
  };

  const loginUser = async (data) => {
    try {
        let res = await JoblyApi.login(data)
        setUser(data.username)
        setToken(() => ({
            token: res,
          }));

        
    } catch (err) {
        throw err;
        
    }
  }

  const logoutUser = () => {
    setToken({ token: "" })
    setUser()
    console.log('worked')
  }

  return (
    <CurrUserContext.Provider value={user}>
    <BrowserRouter>
      <NavBar logout={logoutUser}/>
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
            <CompanyDetails />
          </Route>
          <Route exact path="/jobs">
            <Jobs />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="*">
            <p>Custom 404 page goes here</p>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
    </CurrUserContext.Provider>
  );
};

export default Router;
