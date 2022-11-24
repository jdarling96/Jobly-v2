import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-spinners-css";
import JobsCard from "../jobs/JobsCard";
import JoblyApi from "../api/api";

const CompanyDetails = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await JoblyApi.getCompany(handle);
      setCompany(res);
      setIsLoading(false);
    };
    getData();
  }, [handle]);

  if (isLoading) {
    return (
      <div className="loading">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      {company.jobs.map((j) => (
        <JobsCard
          key={j.id}
          id={j.id}
          title={j.title}
          salary={j.salary}
          equity={j.equity}
        />
      ))}
    </div>
  );
};

export default CompanyDetails;
