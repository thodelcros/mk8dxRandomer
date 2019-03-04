import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { navigateCompo } from '../../../store/actions';
import './Navigation.scss';

const Navigation = ({ navigate, activeCompo, nbOfCompo }) => (
    <div className="navigation">
        <button
            onClick={() => navigate('previous')}
            disabled={0 === activeCompo}
            className="navigation-button"
        >
            <i className="fas fa-arrow-left" />
        </button>
        <button
            onClick={() => navigate('next')}
            disabled={activeCompo >= nbOfCompo - 1}
            className="navigation-button"
        >
            <i className="fas fa-arrow-right" />
        </button>
    </div>
);

Navigation.propTypes = {
    navigate: PropTypes.func.isRequired,
    nbOfCompo: PropTypes.number.isRequired,
    activeCompo: PropTypes.number.isRequired,
};

export default connect(
    ({ activeCompo, nbOfCompo }) => ({ activeCompo, nbOfCompo }),
    (dispatch) => ({
        navigate: (direction) => dispatch(navigateCompo(direction)),
    }),
)(Navigation);
