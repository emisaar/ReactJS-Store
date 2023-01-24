import React from "react";
// import start from "../img/star.png"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0 ) {
        badgeText = 'SOLD OUT'
    } else {
        badgeText = 'AVAILABLE'
    }

    return(
        <div className="card">
            {/* {props.openSpots === 0 && <div className="card-soldOut">{badgeText}</div>} */}
            <div className={badgeText === "SOLD OUT" ? "card-soldOut" : "card-available"}>{badgeText}</div>
            <img src={require(`../img/vg-box-art/${props.img}`)} alt="Box Art" className="card-img"/>
            <h3 className="card-h3">{props.name}</h3>
            <div className="card-stats">
                <img src={require("../img/star.png")} alt="Star" className="card-star"/>
                <span className="gray">{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount})</span>
                <span className="bold">•{props.company}</span>
            </div>
            {props.description.length < 40 ? <p className="card-p">{props.description}</p> : <p className="card-p">{props.description.slice(0,80)}...</p>}
            <p className="card-price">Price: <span className="bold">{props.price}$</span></p>
        </div>
    )
}
