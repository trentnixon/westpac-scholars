import React, { Component } from 'react';
import ParentList from "../Elements/ParentList";

export default  class  Default extends Component {
  componentWillMount(){}
  render() {
    return(
      <div className="ResultsContainer">
        <div className="ListContainer">
          <ParentList Parent={this.props.Parent} /> 
        </div>
      </div>
    )
  }
}