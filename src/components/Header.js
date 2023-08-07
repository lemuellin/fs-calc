import React from 'react';
import '../styles/styles.css';
import Logo from '../styles/logo.jpeg';

const Header = () => {
    return(
        <div className='header'>
            <img src={Logo} className='logo' alt="TCT logo"></img>
            <div className='headerText'>Feeds & Speeds Calculator</div>
        </div>
    );
}

export default Header;