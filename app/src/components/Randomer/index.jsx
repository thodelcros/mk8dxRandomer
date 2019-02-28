import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';
import { connect } from 'react-redux';
import { changeNbOfCompo } from '../../store/actions';
import './Randomer.scss';

const Randomer = ({ nbOfCompo, changeCompos }) => (
    <div className="randomer">
        <div className="flex flex-between randomer-header">
            <h2>Nombre de personnages à générer</h2>
            <Image publicId="mk8dxRandomer/public/cameraman" width="75" />
        </div>
        <div className="flex flex-start-column randomer-controls">
            <p>{nbOfCompo}</p>
            <p>{nbOfCompo > 1 ? 'compos' : 'compo' }</p>
            <div className="buttons">
                <button className="secondary-button" onClick={() => changeCompos('increment')}>+</button>
                <button className="secondary-button" onClick={() => changeCompos('decrement')}>-</button>
            </div>
        </div>
    </div>
);

Randomer.propTypes = {
    nbOfCompo: PropTypes.number.isRequired,
    changeCompos: PropTypes.func.isRequired,
};

export default connect(
    ({ nbOfCompo }) => ({ nbOfCompo }),
    (dispatch) => ({
        changeCompos: (action) => dispatch(changeNbOfCompo(action)),
    }),
)(Randomer);
