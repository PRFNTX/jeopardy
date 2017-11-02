import React, {Component} from "react"

class Answer extends Component{
    constructor(){
        super();
        this.state={
            style:{},
        }
    }
    keydown=(e)=>{
        console.log(e.key)
        if (e.key===" "){
            this.props.destroy()
            console.log("Space!")
        }

    }
    componentDidMount(){
        this.setState({
            style:{
            "top":0,
            "left":0,
            "width":"100vw",
            "height":"100%",
            }
        })
        document.addEventListener("keydown",this.keydown)
        this.content.focus()
    }

    componentWillUnmount(){
        document.removeEventListener("keydown",this.keydown)

    }

    componentWillReceiveProps=()=>{
        let newOb=Object.create(this.props.style)

        this.setState({
            style:newOb
        })

    }
    render(){
        return(
            <div className="answer" style={this.state.style} ref={(ref)=>this.content=ref}>
                <h1>{this.props.content}</h1>
            </div>
        )
    }
}

export default Answer