import React, { Component } from 'react'
import classes from './layout.module.css'
import Header from '../../components/header/header'
import Home from '../../components/home/home'
import { Route,withRouter,Link } from 'react-router-dom'
import { Spinner, Alert, Button } from 'react-bootstrap'
import Register from '../../components/register/register'
import axios from '../../components/axiosInstance/axiosInstance'
import Login from '../../components/login/login'
import Dashboard from '../dashboard/dashboard'
class Layout extends Component {
    state={
        status:'landing',
    }
    registerHandler = (data) => {
        this.setState({status:'registering'})
        axios.post('/users.json',data).then(
            this.setState({status:'registerSuccess'})
        ).catch(
            (error) => console.log(error)
        )
    }
    closeAlert = () => {
        this.props.history.push('/')
        this.setState({status:'landing'})
    }
    loginHandler = (data) => {
        this.setState({status:'verifying'})
        axios.get('/users.json').then((response) => {
            console.log(response.data);
            const fireBaseData = response.data;
            let ch = 0;
            for(let i in fireBaseData){
                if(fireBaseData[i].email==data.email && fireBaseData[i].password==data.password){
                    ch=1;
                    break;
                }
            }
            if(ch==1){
                this.setState({
                    status:'verified',
                    udata:fireBaseData.i,
                })
            }
            else{
                this.setState({
                    status:'verificationError',
                    dummy:0,
                })
            }
        }).catch((error) => console.log(error))
    }
    dashSet = () =>{
        this.setState({status:'dashboard'})
    }
    render(){
        let RegisterComponent = <Register handler = {this.registerHandler} />
        let LoginComponent = <Login handler = {this.loginHandler} />
        if(this.state.status=='registering'){
            RegisterComponent = (
                <div style={{margin:'50px auto',width:'50px'}}>
                    <Spinner variant='info' animation="border" role="status" size='lg' as='div'>
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            )
        }
        else if(this.state.status=='registerSuccess'){
            RegisterComponent = (
                <Alert variant='success' onClose={this.closeAlert} dismissible className='m-4'>
                    <Alert.Heading>Congrats!</Alert.Heading>
                    <p>
                        You are now registered as a valid user
                    </p>
                    <Button as={Link} to='/login'>Login</Button>
                </Alert>
            )
        }
        if(this.state.status=='verifying'){
            LoginComponent = (
                <div style={{margin:'50px auto',width:'50px'}}>
                    <Spinner variant='success' animation="border" role="status" size='lg' as='div'>
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            )
        }
        else if(this.state.status=='verified'){
            this.props.history.push('/dashboard')    
            if(this.state.status!='dashboard'){
                this.dashSet();
            }
        }
        else if(this.state.status=='verificationError'){
            LoginComponent = (
                <Alert variant='danger' style={{margin:'50px'}} dismissible onClose={() => this.setState({status:'landing'})}>
                    <Alert.Heading>Login Error</Alert.Heading>
                    <p>
                        Please check your credantials then login again...
                    </p>
                </Alert>
            )
        }
        let DashboardComponent = <Dashboard />
        console.log(this.state);
        return(
            <div className=''>
                <Header />
                <Route path='/' exact render={Home} />
                <Route path='/register' exact>
                    {RegisterComponent}
                </Route>
                <Route path='/login' exact>
                    {LoginComponent}
                </Route>
                <Route path='/dashboard'>
                    {DashboardComponent}
                </Route>
            </div>
        )
    }
}

export default withRouter(Layout)