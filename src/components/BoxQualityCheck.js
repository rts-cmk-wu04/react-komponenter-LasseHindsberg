// BoxQualityCheck.js
import React from "react";
import './Box.css'
import Heading from "./Heading";
import Logo from "./Logo";

var card__qualityCheck = {
    backgroundColor: "#0AACDC",
}

function BoxQualityCheck() {
    return (
        <div className="card__quality" style={ card__qualityCheck}>
            <Logo />
            <Heading>quality check</Heading>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpat ex eget elit venenatis, vel luctus arcu pulvinar. </p>
        </div>
        )
}

export default BoxQualityCheck;