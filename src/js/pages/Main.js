import React, { Component } from 'react';
// Import Layout Components
import OuterShell from "../dom/OuterShell";

// Application
import InteractiveList from "../Application/InteractiveList/InteractiveList";

// Use this component to build up the Project Layout
export default class Main extends Component {
  componentDidMount() {

    this.props.APP.APPLICATION[0].forEach((picture) => {
      const img = new Image();
      img.src = "https://gdn-cdn.s3.amazonaws.com/embed/2019/06/westpac-scholars"+picture.HeadShot;
  });
  }
  render() {
    
    return (
        <div className="container-fluid" id="Glabs">
          <OuterShell  {... this.props} >
              <InteractiveList 
                  App={this.props.APP.APPLICATION} 
                  {... this.props}
              />
          </OuterShell>
        </div>
        ) 
  }
} 
   