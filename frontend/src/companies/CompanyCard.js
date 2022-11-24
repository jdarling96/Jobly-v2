import React from "react";
import { Card, CardTitle, CardBody, CardText, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import "./CompanyCard.css";
import "bootstrap/dist/css/bootstrap.css";

const CompanyCard = ({ handle, name, description, numEmployees, logo }) => {
  return (
    <div>
      <Link style={{ textDecoration: "none" }} to={`/companies/${handle}`}>
        <Card className="companyCard my-2">
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
            <CardText>
              <small className="text-muted">
                Number of Employees: {numEmployees}
              </small>
            </CardText>
          </CardBody>
          <CardImg alt="card logo of company" src={logo} />
        </Card>
      </Link>
    </div>
  );
};

export default CompanyCard;
