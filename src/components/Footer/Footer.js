import { specialChars } from '@testing-library/user-event';
import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer-Content">
                <p className="Footer-Text">Copyright &copy 2021.</p>
            </div>
        </footer>
    );
}

export default Footer;