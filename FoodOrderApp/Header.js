import React from 'react';

const Header = () => {
    return (<div className="header">
        <div className="logo">
            <img src="https://i.pinimg.com/originals/68/9f/35/689f35fec5d9cc4c4faa2f76fb9d063d.jpg"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    );
};

export default Header;