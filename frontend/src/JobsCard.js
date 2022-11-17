import React from "react";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const JobsCard = ({ title, salary, equity, companyName }) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardTitle>{companyName}</CardTitle>

          <CardText>
            <small>Salary: {salary}</small>
          </CardText>
          <CardText>
            <small>Equity: {equity}</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default JobsCard;
