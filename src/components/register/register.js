import React from 'react'
import { Form,Button } from 'react-bootstrap'

const Register = (props) => {
    const submitHandler = () => {
        let data = {
            name:document.getElementById('uname').value,
            email:document.getElementById('uemail').value,
            dob:document.getElementById('udob').value,
            gender:document.getElementById('ugender').value,
            password:document.getElementById('upassword').value,
        }
        props.handler(data)
    }
    return(
        <Form style={{margin:'30px',boxShadow:'2px 2px 14px grey',padding:'20px',borderRadius:'3px'}}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='enter full name' autoFocus id='uname'/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='enter email' id='uemail'/>
                <Form.Text className='text-muted'>
                    we never share your data with any one
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Date of birth</Form.Label>
                <Form.Control type='date' placeholder='enter dob' id='udob' />
            </Form.Group>
            <Form.Group>
                <Form.Label>Gender</Form.Label>
                <Form.Control as='select' placeholder='gender' id='ugender' >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Create Password</Form.Label>
                <Form.Control type='password' id='upassword' />
                <Form.Text>Create a strong password</Form.Text>
            </Form.Group>
            <Button variant='success' type='button' block onClick={submitHandler} >Register</Button>
        </Form>
    )
}
export default Register