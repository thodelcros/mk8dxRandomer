import React from 'react';
import { Image } from 'cloudinary-react';
import './Navbar.scss';

const Navbar = () => (
    <div className="navbar flex-column">
        <Image publicId="mk8dxRandomer/public/logo" width="150" />
    </div>
);

export default Navbar;
