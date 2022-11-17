import React from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-spinners-css";
import useApi from "./hooks/useApi";
import JobsCard from "./JobsCard"

const CompanyDetails = () => {
    const { handle } = useParams()
    const [company,,loading] = useApi('getCompany', handle)
    
    
    


    if (loading) {
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
           {company.jobs.map(j => (
                <JobsCard key={j.id} title={j.title} salary={j.salary} equity={j.equity} />
            ))} 

        </div>
    )
}

export default CompanyDetails