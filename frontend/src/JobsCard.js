import React,{useContext} from "react";
import { Card, CardTitle, CardBody, CardText, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import CurrUserContext from "./CurrUserContext";

const JobsCard = ({ id, title, salary, equity, companyName, apply }) => {
  const user = useContext(CurrUserContext)
  let applied = user.applications.find(c => id === c)
  
  const handleClick = async () => {
   await apply(user.username, id)
  }
  
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
          <CardText>
            {applied 
            ?
            null
            :
            <Button onClick={handleClick}>
              Apply
            </Button>
}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default JobsCard;
