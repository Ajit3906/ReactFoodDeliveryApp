import React from 'react';
import './header.css';
import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState('Login');

    return (<div className="header">
        <div className="logo">
            <img src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    <h5><Link to="/">Home</Link></h5>
                </li>
                <li>
                    <h5><Link to="/about">About</Link></h5>
                </li>
                <li>
                    <h5><Link to="/contact">Contact Us</Link></h5>
                </li>
                <li><h5>Cart</h5></li>
                <button className='login' onClick={() => {
                    btnName === "Login" ?
                    setBtnName('Logout') : setBtnName('Login');
                }}>{btnName}</button>
            </ul>
        </div>
    </div>
    );
};

export default Header;