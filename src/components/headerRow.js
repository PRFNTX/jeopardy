import React, {Component} from "react"
import HeaderItem from "./headerItem"

class HeaderRow extends Component{
    render(){
        return(
            <tr>
                <HeaderItem content={this.props.categories[0]}/>
                <HeaderItem content={this.props.categories[1]}/>
                <HeaderItem content={this.props.categories[2]}/>
                <HeaderItem content={this.props.categories[3]}/>
                <HeaderItem content={this.props.categories[4]}/>
                <HeaderItem content={this.props.categories[5]}/>
            </tr>
        )
    }
}

export default HeaderRow
