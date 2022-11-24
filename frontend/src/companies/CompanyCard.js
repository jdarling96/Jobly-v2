import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";
import "bootstrap/dist/css/bootstrap.css";

const CompanyCard = ({ handle, name, description, numEmployees, logo }) => {
  return (
    <Link className="CompanyCard card" to={`/companies/${handle}`}>
      <div className="card-body">
        <h6 className="card-title">
          {name}
          {logo && <img src={logo}
                           alt={name}
                           className="float-right ml-5" />}
        </h6>
        <p><small>{description}</small></p>
        <p><small>Employees: {numEmployees}</small></p>
      </div>
    </Link>
);
};

export default CompanyCard;
