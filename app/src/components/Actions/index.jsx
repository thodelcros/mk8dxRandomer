import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { randomize } from '../../store/actions';
import './Actions.scss';

const Actions = ({ startRandomizer, back }) => (
    <div className="actions flex block">
        <Link to={back ? '/' : '/results'}>
            <button
                className={classNames(
                    'primary-button',
                    'flex-center',
                    { back },
                )}
                onClick={!back ? startRandomizer : null}
            >
                <i className={classNames('fas', { 'fa-random': !back, 'fa-undo-alt': back })} />
                <p>{back ? 'Restart' : 'Start'}</p>
            </button>
        </Link>
    </div>
);

Actions.propTypes = {
    startRandomizer: PropTypes.func.isRequired,
    back: PropTypes.bool,
};

export default connect(
    null,
    (dispatch, { current }) => ({
        startRandomizer: '/characters' === current ?
            () => dispatch(randomize('onlyItems')) :
            () => dispatch(randomize()),
    }),
)(Actions);
