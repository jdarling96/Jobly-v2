import React from "react";
import { Card, CardTitle, CardBody, CardText, CardImg } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

const CompanyCard = ({ name, description, numEmployees, logo }) => {

    return (
        <div>
            <Card className="my-2">
                <CardBody>
                    <CardTitle>
                       {name}
                    </CardTitle>
                    <CardText>
                        {description}

                    </CardText>
                    <CardText>
                        <small className="text-muted">
                            Number of Employees: {numEmployees}
                        </small>
                    </CardText>
                </CardBody>
                <CardImg
                alt="card logo of company" 
                src={logo}/>
            </Card>

        </div>
    )
}

export default CompanyCard