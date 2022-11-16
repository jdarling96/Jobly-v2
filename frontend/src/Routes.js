import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Companies from "./Companies";
import CompanyDetails from "./CompanyDetails";
import Jobs from "./Jobs";
import Profile from "./Profile";
import NavBar from "./NavBar";

const Router = () => {


    return (
        <BrowserRouter>
        <NavBar />
        <main>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path="/signup">
                <Signup />
            </Route>
            <Route exact path='/login'>
                <Login />
            </Route>
            <Route exact path='/companies'>
                <Companies />
            </Route>
            <Route exact path='/companies/:handle'>
                <CompanyDetails />
            </Route>
            <Route exact path='/jobs'>
                <Jobs />
            </Route>
            <Route exact path='/profile'>
                <Profile/>
            </Route>
            <Route exact path='*'>
                <p>Custom 404 page goes here</p>

            </Route>

        </Switch>
        </main>
        </BrowserRouter>
    )



}

export default Router