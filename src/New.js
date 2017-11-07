import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom"
import tableStyle from "./components/styles/table.css"

import InputItem from "./components/InputItem"


class New extends Component{
    constructor(){
        super()
        this.state={
            dataIn:[],
            edit:false,
            header:[],
            body:[]
        }
        this.categories=["","","","","",""]
        this.answers=[
            ["","","","",""],
            ["","","","",""],
            ["","","","",""],
            ["","","","",""],
            ["","","","",""],
            ["","","","",""]
        ]
        this.catRef=["","","","","",""];
        this.ansRef=[
            ["","","","",""],
            ["","","","",""],
            ["","","","",""],
            ["","","","",""],
            ["","","","",""],
            ["","","","",""]
        ]
    }

    refComponent=(name,ref)=>{
        let parse=name.split("-").splice(1,2)
        console.log(parse);
        if (name.charAt(0)=="c"){
            this.catRef[Number(parse[0])]=ref
        }else{
            this.ansRef[Number(parse[0])][Number(parse[1])]=ref
        }
    }
    componentDidMount(){
        if (this.props.edit){
            this.setState({
                edit:true,
                dataIn:this.props.dataIn
            })
        }
        if (this.props.edit){
            this.buildEdit();
        }
        else {
            this.buildNew()
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        for (let i =0;i<this.catRef.length;i++){
            this.categories[i]=this.catRef[i].value;
            for (let j=0;j<5;j++){
                this.answers[i][j]=this.ansRef[i][j].value
            }
        }
        this.props.submit({
            categories:this.categories,
            answers:this.answers
        },e.target.elements.name.value)
    }

    buildNew(){

        let setHeader=[];
        let setBody=[];

        for (let i=0;i<6;i++){
            setHeader.push(<InputItem name={"c-"+i+"-0"} edit={false} setRef={this.refComponent} />)
            let col=[]
            for (let j=0;j<5;j++){
                col.push(<InputItem name={"i-"+i+"-"+j} edit={false} setRef={this.refComponent}  /> )
            }
            setBody.push(col)
        }
        this.setState({
            body:setBody,
            header:setHeader
        })
    }

    buildEdit(){
        let setHeader=[];
        let setBody=[];

        for (let i=0;i<6;i++){
            setHeader.push(<InputItem name={"c-"+i+"-0"} edit={true} value={this.state.dataIn.head[i]} setRef={this.refComponent} />)
            let col=[]
            for (let j=0;j<5;j++){
                col.push(<InputItem name={"i-"+i+"-"+j} edit={true} value={this.state.dataIn.body[i][j]} setRef={this.refComponent} /> )
            }
            setBody.push(col)
        }
        this.setState({
            body:setBody,
            header:setHeader
        })
    }

    render(){
        let transpose=[[],[],[],[],[]]
        this.state.body.forEach((val,i)=>{
            val.forEach((val2,j)=>{
                transpose[j].push(val2)
            })
        })

        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <table className={tableStyle.borders}>
                    <thead>
                        <tr>
                            {this.state.header}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {transpose[0]}
                        </tr>
                        <tr>
                            {transpose[1]}
                        </tr>
                        <tr>
                            {transpose[2]}
                        </tr>
                        <tr>
                            {transpose[3]}
                        </tr>
                        <tr>
                            {transpose[4]}
                        </tr>
                    </tbody>
                </table>
                <label>Game Name:</label><input name="name" type="text" placeholder="board name here (unique)" required/>
                <input type="submit"/>
            </form>
            <Link to="/"> Home </Link>
            </div>
        )
    }
}

export default New