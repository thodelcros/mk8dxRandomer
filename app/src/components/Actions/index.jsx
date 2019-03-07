import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { isEmpty } from 'lodash/fp';
import { connect } from 'react-redux';
import { randomize, getFocusedCharacters } from '../../store/actions';
import './Actions.scss';

const Actions = ({ startRandomizer, back, characters }) => {
    let path = '/results';
    if (back) { path = '/'; }
    if (isEmpty(getFocusedCharacters(characters))) { path = '/characters'; }

    return (
        <div className="actions flex block">
            <Link to={path}>
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
};

Actions.propTypes = {
    startRandomizer: PropTypes.func.isRequired,
    back: PropTypes.bool,
    characters: PropTypes.shape({}).isRequired,
};

export default connect(
    ({ characters }) => ({ characters }),
    (dispatch, { current }) => ({
        startRandomizer: '/characters' === current ?
            () => dispatch(randomize('onlyItems')) :
            () => dispatch(randomize()),
    }),
)(Actions);
