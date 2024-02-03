import React from 'react';

const RestaurantCard = () => {
    return(
        <div className="res-card">
            <img alt="food-image" className="res-logo" src="https://i0.wp.com/vegecravings.com/wp-content/uploads/2018/10/Paneer-Makhani-Recipe-Step-By-Step-Instructions.jpg?fit=2939%2C2988&quality=65&strip=all&ssl=1"></img>
            <h3>Milan</h3>
            <h4>Veg Food, Indian, Punjabi Food</h4>            
            <h4>28 mins</h4>
            <h4 className="star-rating">4.6 star</h4>
        </div>
    );
};

export default RestaurantCard;
