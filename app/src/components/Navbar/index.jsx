import React from 'react';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => (
    <div className="navbar flex-column">
        <Link to="/">
            <Image publicId="mk8dxRandomer/public/logo" width="150" />
        </Link>
    </div>
);

export default Navbar;
