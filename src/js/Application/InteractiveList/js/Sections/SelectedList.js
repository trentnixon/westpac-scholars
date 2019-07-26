import React, { Component } from 'react';
import SelectedList from "../Elements/SelectedListNew";
//import SelectedList from "../Elements/SelectedList";
import BackButton from "../Elements/BackButton";

export default  class  Default extends Component {
  componentWillMount(){ }
  render() {
  
    return(
      <div className="ResultsContainer">
          <BackButton />
        <div className="ListContainer">
              <SelectedList  
                    List={this.props.List}  
                    INT={this.props.INT} 
                    APP={this.props.APP}
                    Parent={this.props.Parent} 
              />
        </div>
      </div>
    )
  }
}