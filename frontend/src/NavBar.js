import React from "react";
import {NavLink} from "react-router-dom"
import { Navbar, Nav, NavItem } from "reactstrap";

const NavBar = () => {
    return (
        <div>
            <Navbar  >
                <NavLink exact to='/'>
                    Jobly
                </NavLink>
                <Nav>
                    <NavItem>
                        <NavLink exact to='/signup'>Signup</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to='/login'>Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to='/companies'>Companies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to='/jobs'>Jobs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to='/profile'>Profile</NavLink>
                    </NavItem>
                </Nav>

            </Navbar>
        </div>
    )
}

export default NavBar