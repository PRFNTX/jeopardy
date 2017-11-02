import React, {Component} from "react"
import DataItem from "./dataItem"

class DataRow extends Component{
    render(){   
        return(
            <tr>
                <DataItem pos={{x:1,y:this.props.y}} show={this.props.show} val={this.props.rowVal} />
                <DataItem pos={{x:2,y:this.props.y}} show={this.props.show} val={this.props.rowVal} />
                <DataItem pos={{x:3,y:this.props.y}} show={this.props.show} val={this.props.rowVal} />
                <DataItem pos={{x:4,y:this.props.y}} show={this.props.show} val={this.props.rowVal} />
                <DataItem pos={{x:5,y:this.props.y}} show={this.props.show} val={this.props.rowVal} />
                <DataItem pos={{x:6,y:this.props.y}} show={this.props.show} val={this.props.rowVal} />
            </tr>
        )
    }
}

export default DataRow