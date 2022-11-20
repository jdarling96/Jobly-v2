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

  const [state, setState, setLocalStorage, clearLocalStorage] = useLocalStorageState("token", "user")
  const [user, setUser] = useState()
  

  
  console.log(state)
  //const [badData, setBadData] = useState()

  useEffect(() => {
    if (state.token) {
      console.log(state)
      const getUser = async (username) => {
        const res = await JoblyApi.getUser(username, state.token);
        setLocalStorage()
        setUser(res)
      };
      getUser(state.user);
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
        token: res
      }));
      
      
    } catch (err) {
      throw err;
    }
  };

  const loginUser = async (data) => {
    try {
        let res = await JoblyApi.login(data)
        setState(() => ({
          user: data.username,
          token: res
        }));
        

        
    } catch (err) {
        throw err;
        
    }
  }

  const logoutUser = () => {
    setState({ token: "", user: "" })
    
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
