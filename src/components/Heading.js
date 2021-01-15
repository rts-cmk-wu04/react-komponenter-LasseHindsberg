//Heading.js
import React from "react";
import './Heading.css';

function Heading({ children }) {
    return <h1 className="box__header"> { children } </h1>
}

export default Heading;