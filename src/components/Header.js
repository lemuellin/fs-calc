import React from 'react';
import '../styles/styles.css';

const Header = () => {
    return(
        <div className='header'>
            <h1 className="small-screen-label headerText">Feeds & Speeds Calc.</h1>
            <h1 className="large-screen-label headerText">Feeds & Speeds Calculator</h1>
        </div>
    );
}

export default Header;