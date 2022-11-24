import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";
import CurrUserContext from "../auth/CurrUserContext";

const Home = () => {
  const { user } = useContext(CurrUserContext);

  return (
    <div className="Homepage">
      <div className="container text-center">
        <h1 className="mb-4 font-weight-bold">Jobly</h1>
        <p className="lead">All the jobs in one, convenient place.</p>
        {user ? (
          <h2>Welcome Back, {user.firstName || user.username}!</h2>
        ) : (
          <p>
            <Link className="btn btn-primary font-weight-bold mr-3" to="/login">
              Log in
            </Link>
            <Link className="btn btn-primary font-weight-bold" to="/signup">
              Sign up
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
