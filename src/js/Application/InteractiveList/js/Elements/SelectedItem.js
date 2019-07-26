import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import Video from "../Elements/Video";
import SupportingImage from "./SupportingImage";
import Categories from "../Elements/SelectedCategories";
import Button from '@material-ui/core/Button';
import BottomCTA from "../Layout/BottomCTA";
import {GA} from "../../../../../actions/ga";
let Item;

//     <Button className="ScholarLinks" variant="outlined" href={Item.CTA2} target="_blank"onClick={()=>{GA('Application Click','Button > Learn More ',Item.Name)}}  >Learn more about</Button>

export default  class Default extends Component {
  componentWillMount(){ }
  render() {
    Item = this.props.Item;
    //console.log(this.props)
    if(Item !== undefined)
    {
        return(
            <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay={400} isVisible={true}>
                <div className="SelectedItem" >
                    <div className="Left">
                        <img src={"https://gdn-cdn.s3.amazonaws.com/embed/2019/06/westpac-scholars"+Item.HeadShot}  alt="" className="img"/>
                        
                        <h1>{Item.Name} </h1>
                        <Categories CATS={Item.Categories} />
                    </div>

                    <div className="Right"> 
                        <h1 className="Tagline">{Item.Tagline}</h1>
                        <p>{Item.Copy}</p>
                        
                        <SupportingImage Image={Item.SupportingImage}/>
                        <Video  VideoID={Item.VideoID}/>

                        <h1><strong>Scholarship: </strong>{Item.SubHeader}</h1>
                        <h2><strong>Class Year: </strong>{Item.Date}</h2>

                        <Button className="ScholarLinks" variant="outlined" href={Item.CTA1} target="_blank" onClick={()=>{GA('Application Click','Button > Alumni', Item.Name)}} >View Alumni profile</Button>
                    
                    </div>
                </div>
                <BottomCTA {... this.props} />
            </Animated>
        )
    }
    else{ return null } 
  } 
}