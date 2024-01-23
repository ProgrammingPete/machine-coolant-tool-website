import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services">
                Applications
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/#portfolio">
                Software Solutions
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact#top">
                Contact Us
            </HashLink>
        </>
    )
}

export default NavLinks;