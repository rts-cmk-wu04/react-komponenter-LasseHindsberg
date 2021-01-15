import React from "react";
import './Box.css'
import Heading from "./Heading";
import Logo from "./Logo";

var card__customerService = {
    backgroundColor: "#597AEF"
}
function BoxCustomerService() {
    return (
        <div className="card__customerService" style={ card__customerService}>
            <Logo />
            <Heading>customer service</Heading>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpat ex eget elit venenatis, vel luctus arcu pulvinar. </p>
        </div>
        )
}

export default BoxCustomerService;