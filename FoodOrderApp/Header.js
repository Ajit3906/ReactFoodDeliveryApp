import React from 'react';
import './header.css';

const Header = () => {
    return (<div className="header">
        <div className="logo">
            <img src="https://cdn.dribbble.com/users/630677/screenshots/3833541/zootzoot1.jpg"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li><h5>Search</h5></li>
                <li><h5>Offers</h5></li>
                <li><h5>SignIn</h5></li>
                <li><h5>Cart</h5></li>
            </ul>
        </div>
    </div>
    );
};

export default Header;