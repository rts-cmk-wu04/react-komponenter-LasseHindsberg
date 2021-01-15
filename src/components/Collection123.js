// Collection123.js
import React from "react";
import './Collection.css';
import CollectionAuthor from "./CollectionAuthor";
import CollectionHeader from "./CollectionHeader";
import CollectionImage from "./CollectionImg";
import CollectionNumber from "./CollectionNumber";
import CollectionProfileImage from "./CollectionProfileImage";


function Collection123() {
    return ( 
        <div className="collection__container">
    <CollectionNumber> Collection #123 </CollectionNumber>
    <CollectionImage />
    <CollectionProfileImage />
    <CollectionHeader>In-depth architechture</CollectionHeader>
    <CollectionAuthor>by: benhour</CollectionAuthor>
    </div>
    )
}

export default Collection123;