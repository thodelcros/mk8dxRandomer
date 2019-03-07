import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { navigateCompo } from '../../../store/actions';
import './Navigation.scss';

const Navigation = ({ navigate, activeCompo, randomCompos }) => (
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
            disabled={activeCompo >= Object.keys(randomCompos).length - 1}
            className="navigation-button"
        >
            <i className="fas fa-arrow-right" />
        </button>
    </div>
);

Navigation.propTypes = {
    navigate: PropTypes.func.isRequired,
    randomCompos: PropTypes.shape({}).isRequired,
    activeCompo: PropTypes.number.isRequired,
};

export default connect(
    ({ activeCompo, randomCompos }) => ({ activeCompo, randomCompos }),
    (dispatch) => ({
        navigate: (direction) => dispatch(navigateCompo(direction)),
    }),
)(Navigation);
