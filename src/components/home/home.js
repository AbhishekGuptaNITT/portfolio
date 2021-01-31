import React, { Component } from 'react'
import { Jumbotron,Button, } from 'react-bootstrap'
import { Link,withRouter } from 'react-router-dom'

const Home = (props) => {
    return(
        <Jumbotron style={{minHeight:'90vh'}}>
            <h1 className='display-4'>Hey there!</h1><hr></hr>
            <h4 className='text-dark' style={{}}>
                Easiest way to make great portfolios<br></br>
                Now amaze recruiters with precise and beautifull digital version of you!            
            </h4>
            <Button as={Link} variant='success' to='/register' className='mr-2 mt-4'>Register and Create</Button>
            <Button as={Link} variant='primary' to='/login' className='mr-2 mt-4'>Login and Continue</Button>
        </Jumbotron>
    )
}

export default withRouter(Home)