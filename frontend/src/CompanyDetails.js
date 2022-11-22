import React,{useContext} from "react";
import { useParams, Redirect } from "react-router-dom";
import { Spinner } from "react-spinners-css";
import useApi from "./hooks/useApi";
import JobsCard from "./JobsCard"
import CurrUserContext from "./CurrUserContext";


const CompanyDetails = () => {
  
  const user = useContext(CurrUserContext)
  
    const { handle } = useParams()
    const [company,,loading] = useApi('getCompany', user, handle)
    if(user === undefined) return <Redirect to="/login" />
    
    
    


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