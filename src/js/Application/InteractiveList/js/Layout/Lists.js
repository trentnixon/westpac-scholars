import React, { Component } from 'react';

// Setions
import ParentList from "../Sections/ParentList"
import SelectedList from "../Sections/SelectedList";

export default  class Default extends Component { 
  componentWillMount(){}
  render() {
      if(this.props.APP.PARENT === false){
        return(
            <ParentList Parent={this.props.Parent} />
        )
      }
      else{
        return(
          <SelectedList 
              List={this.props.List} 
              INT={this.props.APP.INT}
              APP={this.props.APP}
              Parent={this.props.Parent}  
          />
        )
      }
  }
}