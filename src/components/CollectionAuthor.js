// CollectionAuthor.js

import React from "react";
import './Collection.css';

function CollectionAuthor( { children }) {
    return ( <h3 className="collection__author"> {children } </h3>)
}

export default CollectionAuthor;