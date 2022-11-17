import React,{ useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Spinner } from "react-spinners-css";
import JoblyApi from "./api";

const CompanyDetails = () => {
    const { handle } = useParams()
    const [company, setCompany] = useState({company: {}})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getCompanyByHandle() {
            try {
            let companyDetails = await JoblyApi.getCompany(handle)
            
            setCompany(() => ({
                company: companyDetails
            }))
            setIsLoading(false)

            } catch {
                <Redirect to="/companies"/>
            }
            

        }
        getCompanyByHandle()

    }, [])

    if (isLoading) {
        return (
          <div className="loading">
            <Spinner />
          </div>
        );
      }
    
    return (
        <div>
            <h1>{company.company.name}</h1>
            <p>{company.company.description}</p>
            {company.company.jobs.map(j => (
                // Jobs Component will go here
            ))}

        </div>
    )
}

export default CompanyDetails