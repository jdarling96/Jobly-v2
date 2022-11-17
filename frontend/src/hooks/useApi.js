import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import JoblyApi from "../api";

const useApi = (method, identifier) => {
  const history = useHistory()
  const [response, setResponse] = useState();
  const [searchFilter, setSearchFilter] = useState();
  const [isLoading, setIsLoading] = useState(true);
  if(method === 'getAllCompanies') method = JoblyApi.getAllCompanies(searchFilter)
  if(method === 'getCompany') method = JoblyApi.getCompany(identifier)
  if(method === 'getAllJobs') method = JoblyApi.getAllJobs(searchFilter)
  if(method === 'getJob') method = JoblyApi.getJob(identifier)
  useEffect(() => {
    const getData = async () => {
    try {
      
        const res = await method
        setResponse(res)
        setIsLoading(false)
    
      
    } catch {
      
      history.push('/companies')

    }
  }
  getData()
    
  }, [searchFilter])


  return [ response, setSearchFilter, isLoading]

} 

export default useApi





