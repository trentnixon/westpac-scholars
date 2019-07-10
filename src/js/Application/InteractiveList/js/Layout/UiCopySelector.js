import React, { Component } from 'react';
import BackButton from "../Elements/BackButton";
// Setions
// import ApplicationCopy from "./ApplicationCopy";
//import SelectedItem from "./js/Layout/Selected";

let Category=null;
class CategoryCopy extends Component {
    render(){
        
        Category = this.props.APP.APPLICATION[2][this.props.APP.INT];
        return(
            <div className="ApplicationCopy">
                <BackButton />
                <img src={"https://gdn-cdn.s3.amazonaws.com/embed/2019/06/westpac-scholars/assets/images/"+Category.Meta2} alt={Category.Category} className="CategoryIcon" />
                <h2>{Category.Category}</h2>
                <p>{Category.Meta1}</p>
            </div>
        )
    }
}

class HomeUICopy extends Component {
    render(){
        Category =this.props.UI.Header;
        return(
            <div className="ApplicationCopy">
                <h1>{Category.Header}</h1>
                <h2>{Category.SubHeader}</h2>
            </div>
        )
    }
}

export default  class CopySelector extends Component {
  componentWillMount(){}
  render() {
    if(this.props.UiState === "Home")
        { return( <HomeUICopy {... this.props} />) }
    else if(this.props.UiState === "Child")
        {return( <CategoryCopy  {... this.props} /> ) }
  }
} 