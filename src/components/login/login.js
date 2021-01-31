import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Login = (props) => {
    const loginHandler = () => {
        const data = {
            email:document.getElementById('uemaillogin').value,
            password:document.getElementById('upasswordlogin').value,
        }
        props.handler(data)
    }
    return(
        <Form style={{width:'80%',display:'block',margin:'50px auto',boxShadow:'2px 2px 14px grey',padding:'20px',borderRadius:'3px'}}>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='enter email' id='uemaillogin' autoFocus/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' id='upasswordlogin' />
            </Form.Group>
            <Button variant='success' type='button' block onClick={loginHandler}>Login</Button>
        </Form>
    )
}

export default Login