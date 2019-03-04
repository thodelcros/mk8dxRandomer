import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { randomize } from '../../store/actions';
import './Actions.scss';

const Actions = ({ startRandomizer }) => (
    <div className="actions block">
        <Link to="/results">
            <button className="primary-button flex-center" onClick={startRandomizer}>
                <i className="fas fa-random" />
                <p>Start</p>
            </button>
        </Link>
    </div>
);

Actions.propTypes = {
    startRandomizer: PropTypes.func.isRequired,
};

export default connect(
    null,
    (dispatch) => ({
        startRandomizer: () => dispatch(randomize()),
    }),
)(Actions);
