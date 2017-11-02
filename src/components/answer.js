import React, {Component} from "react"

class Answer extends Component{
    constructor(props){
        super(props);
        this.state={
            style:{},
            dd:false,
        }
        this.ddStyle={
            "color":"orange",
        }
    }
    keydown=(e)=>{
        if (e.key===" "){
            this.props.destroy()
        }
        else if ((e.key==="Enter")&&(this.state.dd)){
            this.setState({
                dd:false,
            })
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

    componentWillMount(){
        // let newOb=Object.create(this.props.style)
        let newOb=this.props.style
        console.log("here",newOb)

        this.setState({
            style:newOb
        })

    }
    render(){
        let content=this.props.content;
        let style={}
        if (this.state.dd){
            content="DAILY DOUBLE!!"
            style=this.ddStyle

        }
        return(
            <div className="answer" style={this.state.style} ref={(ref)=>this.content=ref}>
                <h1 style={style}>{content}</h1>
            </div>
        )
    }
}

export default Answer