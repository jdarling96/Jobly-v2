import React, { useContext } from "react";
import {Redirect} from "react-router-dom";
import { Spinner } from "react-spinners-css";
import { Form, FormGroup, Input, Button } from "reactstrap";
import useApi from "./hooks/useApi";
import CompanyCard from "./CompanyCard";
import CurrUserContext from "./CurrUserContext";

const Companies = () => {
  
  const user = useContext(CurrUserContext)
  console.log(user)
  
  
  const [companies, filter, loading] = useApi('getAllCompanies', user)
  if(user === undefined) {
    return <Redirect to="/login"/>
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    if (value === "") {
      filter();
    } else {
      filter({ name: value });
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
