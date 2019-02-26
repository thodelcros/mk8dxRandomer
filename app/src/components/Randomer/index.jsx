import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';
import { connect } from 'react-redux';
import { incrementNbOfCompo, decrementNbOfCompo } from '../../store/actions';
import './Randomer.scss';

const Randomer = ({ nbOfCompo, incrementCompos, decrementCompos }) => (
    <div className="randomer">
        <div className="flex flex-between randomer-header">
            <h2>Nombre de personnages à générer</h2>
            <Image publicId="mk8dxRandomer/public/cameraman" width="75" />
        </div>
        <div className="flex flex-start-column randomer-controls">
            <p>{nbOfCompo}</p>
            <p>{nbOfCompo > 1 ? 'compos' : 'compo' }</p>
            <div className="buttons">
                <button className="secondary-button" onClick={() => incrementCompos()}>+</button>
                <button className="secondary-button" onClick={() => decrementCompos()}>-</button>
            </div>
        </div>
    </div>
);

Randomer.propTypes = {
    nbOfCompo: PropTypes.number.isRequired,
    incrementCompos: PropTypes.func.isRequired,
    decrementCompos: PropTypes.func.isRequired,
};

export default connect(
    ({ nbOfCompo }) => ({ nbOfCompo }),
    (dispatch) => ({
        incrementCompos: () => dispatch(incrementNbOfCompo()),
        decrementCompos: () => dispatch(decrementNbOfCompo()),
    }),
)(Randomer);
