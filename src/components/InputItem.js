import React, { Component } from "react"

class InputItem extends Component{
    handleChange=()=>{
        this.hidVal.value=this.text.value
    }

    componentDidMount(){
        this.props.setRef(this.props.name,this.text)
    }

    render(){
        if (this.props.name.charAt(0)==="c"){
            return(
                <th>
                    <div className="item">
                        {/* <input type="text" name={this.props.name} ref={(ref)=>{this.hidVal=ref}} hidden/> */}
                        <textarea className="item input" ref={(ref)=>this.text=ref} name={this.props.name} >
                        </textarea>
                    </div>
                </th>
            )
        } else {
            return(
                <td>
                    <div className="item">
                        {/* <input type="text" name={this.props.name} ref={(ref)=>{this.hidVal=ref}} hidden/> */}
                        <textarea className="item input answer-font" name={this.props.name} ref={(ref)=>this.text=ref}>
                        </textarea>
                    </div>
                </td>
            )
        }
    }
}

export default InputItem