import React, { Component } from 'react';

import PartnerZone from "./TopBanner/PartnerZone";
import ClientDetails from "./TopBanner/ClientDetails";


export default class TopBanner extends Component { 
  render() {
    return ( 
        <div className="DarkBar" id="TopBanner">  
            
                <div className="" id="Sponsor">
                    <PartnerZone  PartnerZone={this.props.PartnerZone}/>
                    <ClientDetails Client={this.props.Client} />
                </div>
     
        </div>
    );
  } 
} 