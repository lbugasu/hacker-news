import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom';
import HomePage from "./components/HomePage"
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './main.css'
import Header from './components/Header'
import {createStore} from 'redux';
// import {Router, Route} from 'react-router-dom'
class App extends Component{
    constructor(){
        super();
        this.state = {pageNo:1}
        // this.handleClick = this.handleClick.bind(this)
        window.open = `/?page=1${this.state.pageNo}`
        
    }
    // handleClick(){
    //     console.log(this.state.pageNo)
    // }
    render(){
        
        return (
            
            <Router>
                <div className="menu">
                    <div className="topMenu">
                        <div className="news">News</div>
                        <div className="about">About</div>
                    </div>
                    <div className="navigation">
                    <Link  onClick={(e) => {
                        if(this.state.pageNo>1){
                            this.setState({ pageNo: this.state.pageNo - 1 })
                            }
                            console.log(this.state.pageNo)
                            this.to = "/?home"
                        }}
                         to={`/`}
                        >
                        &lt;prev 
                    </Link>
                    &nbsp;
                    <Link 
                        onClick={(e) => {
                            this.setState({ pageNo: this.state.pageNo + 1 })
                            console.log(this.state.pageNo)
                        }}
                         to={`/`} 
                        >
                        next&gt;
                    </Link>
                    </div>
                </div>
                <HomePage pageNo = {this.state.pageNo}/>
                
            </Router>
        )
    }
}
export default App;

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<App/>, wrapper) : false;
