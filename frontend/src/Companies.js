import React,{useState, useEffect} from "react";
import { Spinner } from 'react-spinners-css';
import JoblyApi from './api'
import CompanyCard from "./CompanyCard";

const Companies = () => {
    const initialState = {
        companies:[]
    }
    const [companyList, setCompanyList] = useState(initialState)
    const [searchFilter, setSearchFilter] = useState({})
    const [isLoading, setIsLoading] = useState(true)

// for search filters the values of the 3 params cannot be left blank eg name= ...

    useEffect(()=> {
        async function getCompanyList(searchFilter) {
            let companies = await JoblyApi.getAllCompanies(searchFilter)
            setCompanyList(() => ({
                companies: [...companies]
            }))
            //setIsLoading(false)
        }
        getCompanyList(searchFilter)

    },[searchFilter])

     console.log(companyList)
     console.log(companyList.companies.length)
    
    if (companyList.companies.length === 0) { 
    return <div className="loading"><Spinner/></div>;
    }
    

    return (
        <div>
            {companyList.companies.map(c => (
                <CompanyCard key={c.handle} name={c.name} description={c.description} numEmployees={c.numEmployees} logo={c.logoUrl}  />
            ))}
            

        </div>
    )
}

export default Companies