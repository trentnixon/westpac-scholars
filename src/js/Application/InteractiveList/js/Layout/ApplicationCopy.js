import React, { Component } from 'react';

export default  class Default extends Component {
  componentWillMount(){}

  CreateCopyType(data,i){
          switch(data.Type) { 
              case 'p':
                 return <p key={i} className={data.Class}>{data.Copy}</p>
                 // eslint-disable-next-line
              break;
              
              case 'h1':
                  return <h1 key={i} className={data.Class}>{data.Copy}</h1>
              // eslint-disable-next-line
              break;
              
              case 'h2':
                return <h2 key={i} className={data.Class}>{data.Copy}</h2>
              // eslint-disable-next-line
              break;
              
              case 'h3':
                  return <h3 key={i} className={data.Class}>{data.Copy}</h3>
              // eslint-disable-next-line
              break;

              default:
                  return <p key={i} className={data.Class}>{data.Copy}</p>
            }
  }

  
  render() {
    let BodyCopy = this.props.BodyCopy    
    // eslint-disable-next-line   
    let  Left = BodyCopy.map((copy,i)=>{ if(copy.Class.trim() === "left"){ return ( this.CreateCopyType(copy,i)) } })
    // eslint-disable-next-line
    let  Right = BodyCopy.map((copy,i)=>{ if(copy.Class.trim() === "right"){ return ( this.CreateCopyType(copy,i)) } })

    return( 
        <div className="ApplicationCopy"> 
            <div className="Left">{Left} </div>
            <div className="Right">{Right} </div>
        </div> 
      ) 
  }
}