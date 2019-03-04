import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';
import './Item.scss';

const Item = ({ item: { imageUrl, name }, type }) => (
    <div className="item flex flex-between">
        <Image publicId={`mk8dxRandomer/${type}/${imageUrl}`} width="90" />
        <div className="infos">
            <p>{name}</p>
            <button className="switch-button">
                Switch !
            </button>
        </div>
    </div>
);

Item.propTypes = {
    item: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.string.isRequired,
};

export default Item;
