import React, {Component} from "react"
import axios from "axios"

import { Link } from "react-router-dom"

class GameItem extends Component{
    render(){
        return (
            <h3 onClick={()=>this.props.click(this.props.id)} className={this.props.sel ? "selected":""}>{this.props.name}</h3>
        )
    }
}

class GameSummary extends Component{
    render(){
        return(
            <div/>
        )
    }
}
class Home extends Component{
    constructor(){
        super();
        this.state={
            games:[{
                name:"unloaded",
                categories:[],
                answers:[]
            }],
            selected:0
        }
    }
    componentDidMount(){
        axios.get("/game").then(
            (result)=>{
                console.log(result.data)
                this.setState({
                    games:result.data
                })
            },
            (err)=>{
                this.setState({
                    games:[{name:"failed to load"}]
                })
            }
        )
    }
    handleClick=(id)=>{
        this.setState({
            selected:id
        })
        this.props.setGame(this.state.games[this.state.selected])
    }

    openGame=()=>{
        window.location.pathname="/game"
    }

    render(){
        let games=this.state.games.map((val,i)=><GameItem id={i} key={i} click={this.handleClick} sel={i===this.state.selected} name={val.name} />)
        let shownName = this.state.games[this.state.selected].name
        let shownCategories=this.state.games[this.state.selected].categories.map(val=><li>{val}</li>)
        return(
            <div>
                <h1> Games: </h1>
                <div className="games" >
                    {games}
                </div>
                <div>
                <h2>{shownName}</h2>
                <ul>
                    {shownCategories}
                </ul>
                </div>
                <button onClick={this.openGame}> Start </button>
            </div>
        )
    }

}

export default Home