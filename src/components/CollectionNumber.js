//CollectionNumber.js
import React from "react";
import './Collection.css';


function CollectionNumber( { children }) {
    return ( <h2 className="collection__number"> { children } </h2>
    )
}

export default CollectionNumber;