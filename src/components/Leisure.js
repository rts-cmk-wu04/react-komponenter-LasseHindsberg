import React from "react";
import './Leisure.css';

function Leisure(params) {
    return(
        <div className="leisure__container">
            <img className="leisure__img" src='https://picsum.photos/293/375' alt=''/>
            <h1 className="leisure__header">Outdoor Experience</h1>
            <div className="leisure__btn">Leisure</div>
            <p className="leisure__description">It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside.</p>
            <div className="leisure__gallery">
                <img className="gallery__img" src='https://picsum.photos/99/104' alt='' />
                <img className="gallery__img" src='https://picsum.photos/99/104' alt='' />
                <img className="gallery__img" src='https://picsum.photos/99/104' alt='' />
            </div>
        </div>
    )
}

export default Leisure;