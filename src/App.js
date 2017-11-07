import React, { Component } from 'react';
import './App.css';
import tableStyle from "./components/styles/table.css"
import HeaderRow from "./components/headerRow"
import DataRow from "./components/dataRow"
import Answer from "./components/answer"

import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom"
import Game from "./Game"
import New from "./New"
import Home from "./Home"

import axios from "axios"

class App extends Component{
    constructor(){
        super();
        this.state={
            categories:[],
            //"element of surprise", "Git Gud",  
            answers:[]
        }
    }

    componentDidUpdate(){
        console.log(this.state)
    }

    updateGame=(data)=>{
        let cats=Array.from(data.categories)
        let ans=Array.from(data.answers)
        this.setState({
            categories:cats,
            answers:ans
        })

    }

    fillGame=(data,name)=>{
        console.log(data)
        let cats=Array.from(data.categories)
        let ans=Array.from(data.answers)
        console.log(ans)
        console.log(cats)
        this.setState({
            categories:cats,
            answers:ans,
        })
        console.log("did the thing")
        let gameDB={
            name:name,
            categories:cats,
            answers:ans
        }
        axios.post("/game",gameDB).then(
            (result)=>{
                console.log("saved"+ result.data.name)
            },
            (err)=>{
                console.log(err.response.data.message)
            }
        )
    }
    
    render(){
        console.log(this.state)
        return(
            <Router>
                <Switch>
                    <Route path="/" exact render={()=>{
                                return <Home setGame={this.updateGame} />
                            }
                        } />
                    <Route path="/game" exact render={()=>{
                        return <Game stateObject={this} categories={this.state.categories} answers={this.state.answers} />
                        }} />
                    <Route path="/new" render={()=>{
                        return <New edit={false} submit={this.fillGame}/>
                    }} />
                </Switch>
            </Router>
        )
    }
}

export default App