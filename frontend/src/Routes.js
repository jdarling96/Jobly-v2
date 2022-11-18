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

const Router = () => {
    const [user, setUser] = useState()
    const [token, setToken] = useState({token: ""})
    const [badData, setBadData] = useState()

    useEffect(() => {
        if(Object.values(token).length === 1){
            const getUser = async(user) => {

            }
        }
    }, [token])

    const registerUser = async(data) => {
        try {
            let res = await JoblyApi.register(data)
            setToken(() => ({
                token: res
            }))
            setUser(data.username)
            

        } catch (err) {
            throw err
            

        }

    }


    return (
        <BrowserRouter>
        <NavBar />
        <main>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path="/signup">
                <Signup registerUser={registerUser}/>
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