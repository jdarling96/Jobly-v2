import React,{useContext} from "react";
import { Redirect } from "react-router-dom";
import CurrUserContext from "./CurrUserContext";

const Profile = () => {
  
  const user = useContext(CurrUserContext)
  if(user === undefined) return <Redirect to="/login" />

    return (
        <div>

        </div>
    )
}

export default Profile