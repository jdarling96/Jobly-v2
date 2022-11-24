import React, { useContext } from "react";
import { Card, CardTitle, CardBody, CardText, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import CurrUserContext from "../auth/CurrUserContext";
import "./JobsCard.css";

const JobsCard = ({ id, title, salary, equity, companyName }) => {
  const { user, apply } = useContext(CurrUserContext);
  let applied = user.applications.find((c) => id === c);

  const handleClick = async () => {
    await apply(user.username, id);
  };

  return (
    <div>
      <Card className="my-2">
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardTitle>{companyName}</CardTitle>

          <CardText>
            <small>Salary: {salary}</small>
          </CardText>
          <CardText>
            <small>Equity: {equity}</small>
          </CardText>
          <CardText>
            {applied ? (
              <Button color="success" className="applied">
                Applied
              </Button>
            ) : (
              <Button color="danger" onClick={handleClick}>
                Apply
              </Button>
            )}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default JobsCard;
