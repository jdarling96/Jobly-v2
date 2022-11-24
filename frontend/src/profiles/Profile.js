import React, { useState, useContext } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import CurrUserContext from "../auth/CurrUserContext";

const Profile = ({ update }) => {
  const { user } = useContext(CurrUserContext);
  

  const INITIAL_STATE = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [showMsg, setShowMsg] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      await update(user.username, formData);
      setFormData(INITIAL_STATE);
      setShowMsg("Updated Successfully.");
      
    } catch (err) {
     
      setShowMsg(err.join(""));
      
      
    }
  };

  return (
    <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4 my-3">
      <h1>Profile</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <p>{user.username}</p>
        </FormGroup>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            placeholder={user.firstName}
            value={formData.firstName}
            onChange={handleChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            placeholder={user.lastName}
            value={formData.lastName}
            onChange={handleChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={user.email}
            value={formData.email}
            onChange={handleChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="password">Confirm password to make changes:</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          ></Input>
        </FormGroup>
        {showMsg ? <p>{showMsg}</p> : null}
        <Button color="primary">Save Changes</Button>
      </Form>
    </div>
  );
};

export default Profile;
