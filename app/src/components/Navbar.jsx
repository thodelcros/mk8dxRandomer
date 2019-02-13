import React from 'react';
import { Image } from 'cloudinary-react';
import './Navbar.scss';

const Navbar = () => (
    <div className="navbar light-gray flex-center">
        <Image publicId="mk8dxRandomer/public/logo" width="200" />
    </div>
);

export default Navbar;
