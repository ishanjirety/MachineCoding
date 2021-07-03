import React from 'react'
import './Card.css'
export const Card = ({ data }) => {
    const { brand, costPrice, gender, id, imgUrl, name, offer, sellingPrice, size } = data
    return (
        <div className="card">
            <img src={imgUrl} alt="" className="card-img" />
            <p className="card-brand">{brand}</p>
            <h3 className="card-name">{name}</h3>
            <span>{size}</span>
            <div>
                <span className="card-sellingprice">₹{sellingPrice}</span>
                <span className="card-costprice">₹{costPrice}</span>
                <span className="card-offer">{offer}</span>
            </div>
        </div>
    )
}
