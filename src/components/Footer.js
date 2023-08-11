import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            © {currentYear} Bulletin News . All rights reserved.
        </footer>
    );
};

export default Footer;
