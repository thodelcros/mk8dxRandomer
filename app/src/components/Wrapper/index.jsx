import React from 'react';
import PropTypes from 'prop-types';
import { Cloudinary } from 'cloudinary-core';
import './Wrapper.scss';

const cloudinaryCore = new Cloudinary({ cloud_name: process.env.CLOUDINARY_CLOUD_NAME });

const Wrapper = ({ children }) => (
    <div
        className="wrapper"
        style={{ backgroundImage: `url('${cloudinaryCore.url('mk8dxRandomer/public/background')}')` }}
    >
        {children}
    </div>
);

Wrapper.propTypes = {
    children: PropTypes.array.isRequired,
};

export default Wrapper;
