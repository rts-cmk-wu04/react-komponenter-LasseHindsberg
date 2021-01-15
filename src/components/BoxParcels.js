// BoxParcels.js
import React from "react";
import './Box.css'
import Heading from "./Heading";
import Logo from "./Logo";

var card__parcels = {
    backgroundColor: "#FFA767"
    
}

function BoxParcels() {
    return (
        <div className="card__parcels" style={ card__parcels }>
            <Logo />
            <Heading>parcels</Heading>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpat ex eget elit venenatis, vel luctus arcu pulvinar. </p>
        </div>
        )
}

export default BoxParcels;