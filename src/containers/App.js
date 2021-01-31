import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom";
import classes from './App.module.css'
import Layout from './layout/layout'
class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <Layout>
                </Layout>
            </BrowserRouter>
        )
    }
}

export default App