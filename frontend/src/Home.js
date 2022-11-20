import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardBody, CardText, CardLink, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import CurrUserContext from "./CurrUserContext";

const Home = () => {
    const user = useContext(CurrUserContext)


    return (
        <div>
            
            {user === undefined
            ?
            <Card>
                
                    <CardTitle tag="h1">
                Jobly
                </CardTitle>
                <CardBody>
                
                <CardText>All the jobs in one, convenient place.</CardText>
                <Link to="/login">
                    <Button>Log in</Button>
                    </Link>
                    <Link to="/signup">
                    <Button>Sign up</Button>
                    </Link>
                </CardBody>

                </Card>
                :
                <Card>
                
                    <CardTitle tag="h1">
                Jobly
                </CardTitle>
                <CardBody>
                
                <CardText>All the jobs in one, convenient place.</CardText>
                <CardTitle>
                    Welcome Back, {user.username}!
                </CardTitle>
                </CardBody>

                </Card>
                }

            

        </div>
    )
}

export default Home