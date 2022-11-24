import React, { useState, useEffect } from "react";
import { Spinner } from "react-spinners-css";
import { Form, FormGroup, Input, Button } from "reactstrap";

import CompanyCard from "./CompanyCard";
import JoblyApi from "../api/api";

const Companies = () => {
  const [companies, setCompanies] = useState();
  const [searchFilter, setSearchFilter] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await JoblyApi.getAllCompanies(searchFilter);
      setCompanies(res);
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
      setSearchFilter({ name: value });
    }
  };

  if (isLoading) {
    return (
      <div className="spinner">
        <Spinner color="red" />
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
      {companies.length === 0 ? (
        <p>Sorry, no results were found!</p>
      ) : (
        companies.map((c) => (
          <CompanyCard
            key={c.handle}
            handle={c.handle}
            name={c.name}
            description={c.description}
            numEmployees={c.numEmployees}
            logo={c.logoUrl}
          />
        ))
      )}
    </div>
  );
};

export default Companies;
