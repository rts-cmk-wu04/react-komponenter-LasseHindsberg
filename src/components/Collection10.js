// Collection10.js
import React from "react";
import './Collection.css';
import CollectionAuthor from "./CollectionAuthor";
import CollectionHeader from "./CollectionHeader";
import CollectionImage from "./CollectionImg";
import CollectionNumber from "./CollectionNumber";
import CollectionProfileImage from "./CollectionProfileImage";


function Collection10() {
    return ( 
        <div className="collection__container">
    <CollectionNumber> Collection #10 </CollectionNumber>
    <CollectionImage />
    <CollectionProfileImage />
    <CollectionHeader>Off-the-grid experiences</CollectionHeader>
    <CollectionAuthor>by: melanie s.</CollectionAuthor>
    </div>
    )
}

export default Collection10;