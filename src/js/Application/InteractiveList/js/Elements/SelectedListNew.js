import React, { Component } from 'react';
import {isMobile} from 'react-device-detect';
import ButtonBase from '@material-ui/core/ButtonBase';
import Categories from "./CategoriesAttachedToListItem";
import {Animated} from "react-animated-css";
import {ItemSelected} from "../../actions/actions";
import {GA} from "../../../../../actions/ga";

let Delay=0,Keys=[],Bottom;
export default  class Default extends Component {

    handle(int){
        let Store=[], offset=150;
       
        // Store item for display 
        Store =this.props.List[int];
        // Incliude items sub categories 
        Store['Categories'] = this.props.Parent[int];
     
        if(this.props.APP.ITEM !== int){
            if (isMobile) {  offset=250; }
            ItemSelected(Store);
            Bottom = document.getElementById("Bottom");
            //console.log(Bottom.offsetTop);
            window.scrollTo({ top: (Bottom.offsetTop-offset),behavior: 'smooth'});
            GA('Application Click','Scholar',Store.Name)
        } 
    }

     shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    createList(data){
        //console.log("Create List")
        Delay=0;
        Keys=[];
        //console.log(data)
        // eslint-disable-next-line
        data.Parent.map((key,i)=>{
            //console.log(key[data.APP.PARENT_TITLE]);
                if(key[data.APP.PARENT_TITLE] === '1'){
                            Keys.push(i)
                        }
        });
        return this.shuffle(Keys);
    }

    componentWillMount(){ 
       /* Delay=0;
        Keys=[];
        console.log(this.props)
        // eslint-disable-next-line
        this.props.Parent.map((key,i)=>{
                if(key[this.props.APP.PARENT_TITLE] === '1'){
                            Keys.push(i)
                        }
        });
        this.shuffle(Keys);*/
        Keys = this.createList(this.props)
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(this.props.INT, nextProps.INT)
        if(this.props.INT !== nextProps.INT){
            console.log("Create New List") 
            Keys =  this.createList(nextProps)
        }
      }
    render() {
        console.log(Keys, this.props);
        
        return(
            <ul id="SelectedListNew"> 
                {
                    Keys.map((id,i)=>{
             
                       console.log(this.props.List[id].Int);
                        
                    Delay = Delay+150;
                    return (
                        <Animated key={i} animationIn="zoomIn" animationOut="fadeOut" animationInDelay={Delay} isVisible={true}>
                                <li 
                                    key={i} 
                                    className="SelectedListItem"
                                >
                                    <div className="Picture" style={{ backgroundImage: `url(https://gdn-cdn.s3.amazonaws.com/embed/2019/06/westpac-scholars${this.props.List[id].HeadShot})`}} >

                                    
                                        <ButtonBase 
                                            focusRipple 
                                            className="SelectedListIcon" 
                                            onClick={()=>{this.handle(id)}}
                                            disableRipple={true}
                                        >
                                            <span className="SelectedListTitle">
                                                {this.props.List[id].Name}
                                            </span> 
                                           
                                        </ButtonBase>
                                        </div>
                                        <Categories int={this.props.List[id].Int} {... this.props}/>
                                        <p className="Tagline">{this.props.List[id].Tagline}</p>
                                </li>
                        </Animated>
                    )
                }) 
                }
            </ul>
    )
  }
}