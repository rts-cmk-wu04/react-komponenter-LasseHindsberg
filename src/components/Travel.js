// Travel.js
import React from "react";
import "./Travel.css";

function Travel() {
    return (
        <>
        <div className="travel__container">
        <img id="travel__img" src='https://picsum.photos/372/236' alt=''/>
        <h2 className="catagory">Travel</h2>
        <h1 className="travel__header">Surfing in Maldives</h1>
        <p className="travel__description">It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside.</p>
        </div>
        </>
    );
}

export default Travel;