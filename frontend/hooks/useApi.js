/* import { useEffect, useState } from "react";
import JoblyApi from "./api";

const useApi = (method, options = {}) => {
  const [response, setResponse] = useState();
  const [searchFilter, setSearchFilter] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
        const res = await method(options)
        setResponse(res)
    }
  }, [searchFilter])

} */


