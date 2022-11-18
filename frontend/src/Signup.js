import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Signup = ({registerUser}) => {
    const history = useHistory()
    const INITIAL_STATE = {
        username:"",
        password:"",
        firstName:"",
        lastName: "",
        email:""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const [showError, setShowError] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(() => ({
            ...formData,
            [name]:value
        }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await registerUser(formData)
            setFormData(INITIAL_STATE)
            history.push('/')
            

        } catch (err) {
            console.log(err)
            setShowError(() =>([...err]))

        }
        
        
    }

    return (
        <div>
            <h1>Signup</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="username">
                        Username
                    </Label>
                    <Input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        Password
                    </Label>
                    <Input
                    id="password"
                    name="password"
                    type="text"
                    value={formData.password}
                    onChange={handleChange}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="firstName">
                        First Name
                    </Label>
                    <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">
                        Last Name
                    </Label>
                    <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="email">
                        Email
                    </Label>
                    <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}></Input>
                </FormGroup>
                {(showError.length)
                ?
                <p>{showError.join('')}</p>
                :
                null
            }
                <Button color="primary">Submit</Button>
            </Form>

        </div>

    )
}

export default Signup