import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image } from 'cloudinary-react';
import { randomize } from '../../../../store/actions';
import './Item.scss';

const Item = ({ item: { imageUrl, name }, type, switchItem }) => (
    <div className="item flex flex-between">
        <Image publicId={`mk8dxRandomer/${type}/${imageUrl}`} width="90" />
        <div className="infos">
            <p>{name}</p>
            <button
                onClick={() => switchItem(type)}
                className="switch-button"
            >
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
    switchItem: PropTypes.func.isRequired,
};

export default connect(
    null,
    (dispatch) => ({
        switchItem: (type) => dispatch(randomize('item', type)),
    }),
)(Item);
