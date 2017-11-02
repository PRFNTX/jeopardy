import React, {Component} from "react"

class Answer extends Component{
    constructor(){
        super();
        this.state={
            style:{},
            dd:false,
        }
    }
    keydown=(e)=>{
        if (e.key===" "){
            this.props.destroy()
        }

    }
    componentDidMount(){
        this.setState({
            style:{
            "top":0,
            "left":0,
            "width":"100vw",
            "height":"100%",
            },
            dd:this.props.dd
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
        let dd=[];
        if (this.props.dd){
            dd=<h1 style={{"color":"orange"}}>DAILY DOUBLE!!</h1>
        }
        return(
            <div className="answer" style={this.state.style} ref={(ref)=>this.content=ref}>
                {dd}
                <h1>{this.props.content}</h1>
            </div>
        )
    }
}

export default Answer