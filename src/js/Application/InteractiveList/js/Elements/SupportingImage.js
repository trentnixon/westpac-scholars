import React, { Component } from 'react'
class Video extends Component {
  render () {
    //console.log(this.props.Image );

    if(this.props.Image){
      return (
            <div className='SupportingImage'>
                 <img src={this.props.Image} alt="Supporting"/>
            </div>
      )  
    }
    else{
      return ""
    }
  }
}

export default Video;   