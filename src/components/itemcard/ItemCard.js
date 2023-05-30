import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Itemcard.css"

const ItemCard = ({
    id,
    title,
    price,
    rating,
    image
}) => {

    return (
        <div className="product-card">
            <NavLink to={
                `/product/${id}`
            }>
                <div className='img-container'>
                    <img className='object-contain max-h-24'
                        src={image}
                        alt="product"/>

                </div>
            </NavLink>
            <div className="item">
                <p>{title}</p>
                <h3>Ratings : {
                    rating.rate
                }</h3>
                <h3 className="item-price">$ {price}</h3>
                <button className="cart-btn">Add to cart</button>

            </div>
        </div>


    )
}

export default ItemCard
