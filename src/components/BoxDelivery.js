//Box.js
import React from "react";
import './Box.css'
import Heading from "./Heading";
import Logo from "./Logo";

var card__delivery = {
    backgroundColor: "#005AEE",
}

function BoxDelivery() {
    return (
    <div className="card__delivery"style={card__delivery}>
        <Logo />
        <Heading>on-time delivery</Heading>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpat ex eget elit venenatis, vel luctus arcu pulvinar. </p>
    </div>
    )
}

export default BoxDelivery;
