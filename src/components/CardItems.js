import React from "react";
import '../styles/CardsItem.css';


const CardItems = ({ image, title, description, sourceName, sourceLink }) => {

    return (
        <div className="news-card">

            <img src={image} alt={title} className="news-image" />
            <div className="news-content">
                <h2 className="news-title">{title}</h2>
                <p className="news-description">{description}</p>

            </div>
            <div >
                <p>Source : <a className="link-style" href={sourceLink} target="_blank" rel="noopener noreferrer">{sourceName}</a> </p>

            </div>

        </div>
    );

}
export default CardItems;