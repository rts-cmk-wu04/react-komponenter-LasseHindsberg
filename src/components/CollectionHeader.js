//CollectionHeader.js
import React from "react";
import './Collection.css';

function CollectionHeader({children}) {
    return (
        <>
        <h1 className="collection__header">{ children }</h1>
        </>
    )
}

export default CollectionHeader;