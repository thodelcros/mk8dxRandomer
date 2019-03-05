import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash/fp';
import { connect } from 'react-redux';
import { Image } from 'cloudinary-react';
import classNames from 'classnames';
import { toggleCharacterSelection } from '../../store/actions';
import './CharactersSelection.scss';

const CharactersSelection = ({ characters, loading, toggleFocus }) => (
    loading || isEmpty(characters) ?
        (
            <div className="loader flex flex-around">
                <Loader type="Oval" color="#ED0000" />
            </div>
        ) :
        (
            <div className="characters-selection flex flex-wrap flex-around">
                {
                    Object.entries(characters).map(([id, { imageUrl, focused }]) => (
                        <div
                            className={classNames('character-head', { focused })}
                            key={id}
                            onClick={() => toggleFocus(id)}
                        >
                            <Image key={id} publicId={`mk8dxRandomer/characters/${imageUrl}`} width="36" />
                        </div>
                    ))
                }
            </div>
        )
);

CharactersSelection.propTypes = {
    characters: PropTypes.objectOf(PropTypes.shape({
        imageUrl: PropTypes.string,
        focused: PropTypes.bool,
    })),
    loading: PropTypes.bool.isRequired,
    toggleFocus: PropTypes.func.isRequired,
};

export default connect(
    ({ characters, loading }) => ({ characters, loading }),
    (dispatch) => ({
        toggleFocus: (id) => dispatch(toggleCharacterSelection(id)),
    }),
)(CharactersSelection);
