// Collection1.js
import React from "react";
import './Collection.css';
import CollectionAuthor from "./CollectionAuthor";
import CollectionHeader from "./CollectionHeader";
import CollectionImage from "./CollectionImg";
import CollectionNumber from "./CollectionNumber";
import CollectionProfileImage from "./CollectionProfileImage";


function Collection1() {
    return ( 
        <div className="collection__container">
    <CollectionNumber> Collection #1 </CollectionNumber>
    <CollectionImage />
    <CollectionProfileImage />
    <CollectionHeader>Shapes, triangles &amp; fashion</CollectionHeader>
    <CollectionAuthor>by: saraha f.</CollectionAuthor>
    </div>
    )
}

export default Collection1;