import React from 'react';
import PropTypes from 'prop-types';
import { Cloudinary } from 'cloudinary-core';
import './Layout.scss';

const cloudinaryCore = new Cloudinary({ cloud_name: process.env.CLOUDINARY_CLOUD_NAME });

const Layout = ({ children }) => (
    <div className="layout" style={{ backgroundImage: `url('${cloudinaryCore.url('mk8dxRandomer/public/background')}')` }}>
        {children}
    </div>
);

Layout.propTypes = {
    children: PropTypes.array.isRequired,
};

export default Layout;
