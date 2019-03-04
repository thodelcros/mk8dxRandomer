import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';
import getType from '../../../utils/content/getType';
import './Character.scss';

const Character = ({ character: { imageUrl, name } }) => (
    <div className="character flex flex-between">
        <div className="infos">
            <p>{name}</p>
            <p>{getType(name)}</p>
        </div>
        <div className="image">
            <Image publicId={`mk8dxRandomer/characters/${imageUrl}`} width="100" />
        </div>
    </div>
);

Character.propTypes = {
    character: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export default Character;
