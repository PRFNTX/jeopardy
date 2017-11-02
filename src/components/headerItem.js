import React, {Component} from "react"

class HeaderItem extends Component{
    render(){
        return(
            <th className={"item"}><h3>{this.props.content}</h3></th>
        )
    }
}

export default HeaderItem
