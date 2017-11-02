import React, {Component} from "react"
import ReactDOM from "react-dom"

class DataItem extends Component{
    constructor(){
        super()
        this.state={
            val:"",
            done:false,
        }
    }

    getRect(){
        this.setState({
            done:true
        })
        return ReactDOM.findDOMNode(this.box).getBoundingClientRect()

    }

    componentDidMount(){
        this.setState({
            val:this.props.val
        })
    }
    render(){
        let visContent="$"+this.state.val
        if (this.state.done){
            visContent=""
        }
        return(
            <td onClick={()=>this.props.show(this.getRect(),this.props.pos)} ref={(ref)=>this.box=ref} className={"item"}><h1>{visContent}</h1></td>
        )
    }
}
export default DataItem