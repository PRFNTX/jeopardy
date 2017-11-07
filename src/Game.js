import React, { Component } from 'react';
import './App.css';
import tableStyle from "./components/styles/table.css"
import HeaderRow from "./components/headerRow"
import DataRow from "./components/dataRow"
import Answer from "./components/answer"

class Game extends Component {
  constructor(){
    super()
    this.state={
      answer:[],
      categories:["Watch Your Language","changed Me Speechless","Fine Imports","I Object","Tag, You're It","This Category"],
      answers:[
        ["heres the question","lang 2","lang3","lang4","lang5","lang6"],
        ["rend 1","rend 2","rend 3","rend 4","rend 5","rend 6"],
        ["import 1","import 2","import 3","import 4","import 5","import 6"],
        ["Object 1","Object 2","Object 3","Object 4","Object 5","Object 6"],
        ["tag 1","tag 2","tag 3","tag 4","tag 5","tag 6"],
        ["this 1","this 2","this 3","this 4","this 5","this 6"]
      ]

    }
    // this.content={
      // categories:["Watch Your Language","Render Me Speechless","Fine Imports","I Object","Tag, You're It","This Category"],
      //"element of surprise", "Git Gud",  
      // answers:[
      //   ["heres the question","lang 2","lang3","lang4","lang5","lang6"],
      //   ["rend 1","rend 2","rend 3","rend 4","rend 5","rend 6"],
      //   ["import 1","import 2","import 3","import 4","import 5","import 6"],
      //   ["Object 1","Object 2","Object 3","Object 4","Object 5","Object 6"],
      //   ["tag 1","tag 2","tag 3","tag 4","tag 5","tag 6"],
      //   ["this 1","this 2","this 3","this 4","this 5","this 6"]
      // ]}
    
    this.double={
      x:3,
      y:4
    }
  }

   componentDidMount(){
     console.log(this.props.categories)
     this.setState({
       categories:this.props.categories,
        answers:this.props.answers,
     })
   }

  showAnswer=(at,pos)=>{
    // let rect=at.getClientBoundingRect()
    let stpos={
      "top":at.top+"px",
      "left":at.left+"px",
    }
    console.log(stpos.top)
    console.log(at.left)
    let dd=false
    if ((pos.x===this.double.x)&&(pos.y===this.double.y)){
      dd=true
    }
    console.log("st",stpos)
    let answer=<Answer style={stpos} content={this.state.answers[pos.x-1][pos.y-1]} destroy={this.destroy} dd={dd}/>
    this.setState({
      answer:answer
    })

  }

  destroy=()=>{
    this.setState({
      answer:[],
    })
  }

  render() {
    let ansJSX={}
    if(this.state.answer){
      ansJSX=this.state.answer;
    }
    return(
      <div className="main">
        {ansJSX}
        <table className={tableStyle.borders}>
          <thead>
            <HeaderRow categories={this.state.categories}/>
          </thead>
          <tbody>
            <DataRow show={this.showAnswer} rowVal={200} y={1}/>
            <DataRow show={this.showAnswer} rowVal={400} y={2}/>
            <DataRow show={this.showAnswer} rowVal={600} y={3}/>
            <DataRow show={this.showAnswer} rowVal={800} y={4}/>
            <DataRow show={this.showAnswer} rowVal={1000} y={5}/>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Game;
