import React, { Component } from 'react';
import {GA} from "../../../../actions/ga";

export default class PartnerZone extends Component {
  render() {
    let PartnerZone = this.props.PartnerZone;
    return ( 
    <div className="text-left">
        <a href={PartnerZone.PartnerZoneURL}
            onClick={ () =>{GA('Link Clicked', 'Header - PartnerZone', PartnerZone.PartnerZoneURL)}}
        >
            {PartnerZone.PartnerZoneHeader}
        </a>
    </div>
    );
  } 
}