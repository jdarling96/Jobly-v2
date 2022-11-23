import React,{useContext} from "react";
import { Redirect } from "react-router-dom";
import { Spinner } from "react-spinners-css";
import { Form, FormGroup, Input, Button } from "reactstrap";
//import 'bootstrap/dist/css/bootstrap.css';
import useApi from "./hooks/useApi";
import JobsCard from "./JobsCard";
import CurrUserContext from "./CurrUserContext";

const Jobs = ({apply}) => {
  
  const user = useContext(CurrUserContext)
 
  const [jobs, filter, loading] = useApi("getAllJobs", user);
  if(user === undefined) return <Redirect to="/login" />

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    if (value === "") {
      filter();
    } else {
      filter({ title: value });
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <Spinner />
      </div>
    );
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            id="searchFilter"
            name="search"
            placeholder="Enter a Search Term..."
            type="text"
          />
          <Button>Search</Button>
        </FormGroup>
      </Form>
      {jobs.length === 0 ? (
        <p>Sorry, no results were found!</p>
      ) : (
        jobs.map((j) => (
          <JobsCard
            key={j.id}
            id={j.id}
            title={j.title}
            salary={j.salary}
            equity={j.equity}
            companyName={j.companyName}
            apply={apply}
          />
        ))
      )}
    </div>
  );
};

export default Jobs;
