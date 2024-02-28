import React from 'react';
import '../styles/styles.css';
import Logo from '../styles/logo.png';

const Contact = () => {
    return (
        <div>
            <hr/>
            <div className='footer'>
                <div className='logoContainer'>
                    <a href = "https://www.tctcircuitsupply.com/" target="_blank">
                        <img src={Logo} className='logo' alt="TCT logo"></img>
                    </a>
                </div>
                <div className='contactInfo'>
                    <div className='contactUsTitle'>Contact Us</div>
                    <div>Phone: (714) 644-9700</div>
                    <a href="mailto:drillsupport@tctcircuitsupply.com" target="_blank">
                        <div>Email: drillsupport@tctcircuitsupply.com</div>
                    </a>
                </div>
            </div>
            

            
        </div>
    );
}

export default Contact;