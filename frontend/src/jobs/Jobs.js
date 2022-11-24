import React, { useState, useEffect } from "react";
import { Spinner } from "react-spinners-css";
import { Form, FormGroup, Input, Button } from "reactstrap";
//import 'bootstrap/dist/css/bootstrap.css';

import JobsCard from "./JobsCard";
import JoblyApi from "../api/api";

const Jobs = () => {
  const [jobs, setJobs] = useState();
  const [searchFilter, setSearchFilter] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await JoblyApi.getAllJobs(searchFilter);
      setJobs(res);
      setIsLoading(false);
    };
    getData();
  }, [searchFilter]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    if (value === "") {
      setSearchFilter();
    } else {
      setSearchFilter({ title: value });
    }
  };

  if (isLoading) {
    return (
      <div className="loading">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="mt-3">
      <Form onSubmit={handleSubmit}>
        <FormGroup className="form-inline">
          <Input
            className="form-control form-control-lg flex-grow-1"
            id="searchFilter"
            name="search"
            placeholder="Enter a Search Term..."
            type="text"
          />
          <Button color="primary" className="btn btn-lg btn-primary">
            Search
          </Button>
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
          />
        ))
      )}
    </div>
  );
};

export default Jobs;
