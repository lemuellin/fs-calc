import React from 'react';
import '../styles/styles.css';
// import Logo from '../styles/logo.jpeg';

const Header = () => {
    return(
        <div className='header'>
            {/* <img src={Logo} className='logo' alt="TCT logo"></img> */}
            <h1 className='headerText'>Feeds & Speeds Calculator</h1>
        </div>
    );
}

export default Header;