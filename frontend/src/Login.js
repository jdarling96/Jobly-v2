import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Login = ({login}) => {
    const history = useHistory()
    const INITIAL_STATE = {
        username:"",
        password:""
       
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const [showMsg, setShowMsg] = useState()

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
            await login(formData)
            setFormData(INITIAL_STATE)
            history.push('/')
            

        } catch (err) {
            console.log(err)
            setShowMsg(err.join(''))

        }
        
        
    }

    return (
        <div>
            <h1>Login</h1>
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
                    type="password"
                    value={formData.password}
                    onChange={handleChange}>
                    </Input>
                </FormGroup>
                {(showMsg)
                ?
                <p>{showMsg}</p>
                :
                null
            }
                <Button color="primary">Submit</Button>
            </Form>

        </div>

    )
}

export default Login