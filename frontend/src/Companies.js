import React, { useState, useEffect } from "react";
import { Spinner } from "react-spinners-css";
import { Form, FormGroup, Input, Button } from "reactstrap";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";

const Companies = () => {
  const [companyList, setCompanyList] = useState({ companies: [] });
  const [searchFilter, setSearchFilter] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // for search filters the values of the 3 params cannot be left blank eg name= ...

  useEffect(() => {
    async function getCompanyList(searchFilter) {
      let companies = await JoblyApi.getAllCompanies(searchFilter);
      setCompanyList(() => ({
        companies: [...companies],
      }));
      setIsLoading(false);
    }
    getCompanyList(searchFilter);
  }, [searchFilter]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    if (value === "") {
      setSearchFilter();
    } else {
      setSearchFilter({ name: value });
    }

    console.log(e.target[0].value);
  };

  if (isLoading) {
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
      {companyList.companies.length === 0 ? (
        <p>You Suck!!</p>
      ) : (
        companyList.companies.map((c) => (
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
