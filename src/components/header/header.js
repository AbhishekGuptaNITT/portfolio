import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link, } from "react-router-dom";
import classes from './header.module.css'
import Logo from '../../assets/resume.svg'

const Header = (props) => {
    return(
        <Navbar bg='light' expand='lg' style={{minHeight:'10vh'}}>
            <Navbar.Brand as={Link} to='/'>
                <img src={Logo} alt='PortfolioGenerator' width='35'/>MyPortfolio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/' eventKey='home'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/login' eventKey='login'>Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/register' eventKey='register'>Register</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Navbar.Text className='text-dark'>Site Managed by <b>Abhishek Gupta</b></Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header