import React,{useContext} from "react";
import {NavLink} from "react-router-dom"
import { Navbar, Nav, NavItem, Button} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css'
import CurrUserContext from "./CurrUserContext";

const NavBar = ({logout}) => {
    const user = useContext(CurrUserContext)
    
    const handleClick = () => {
        logout()
        

    }
    return (
        <div>
            
            <Navbar expand="md"  navbar="true" >
                <NavLink exact to='/'>
                    Jobly
                </NavLink>
                {user === undefined 
                     ?
                <Nav className="ml-auto" >
                    <NavItem>
                        <NavLink exact to='/signup'>Signup</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to='/login'>Login</NavLink>
                    </NavItem>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                    
                    <NavItem>
                        <NavLink exact to='/companies'>Companies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to='/jobs'>Jobs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to='/profile'>Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  onClick={handleClick} exact to="/">Logout {user.username}</NavLink>
                    </NavItem>
                </Nav>
                      }

            </Navbar>
        </div>
    )
}

export default NavBar