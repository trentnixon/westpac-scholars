import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
  render () {
    //console.log(this.props.VideoID)
    if(this.props.VideoID){
      return (
        <div className='player-wrapper'>
                  <ReactPlayer 
                  width='100%'
                  height='100%'
                     url={`https://www.youtube.com/watch?v=${this.props.VideoID}`}  
                     className="YTVideoPlayer"
                  />
                  </div>
      )
         
    }
    else{
      return ""
    }
    
  }
}

export default Video;  