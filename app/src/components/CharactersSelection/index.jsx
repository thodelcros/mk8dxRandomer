import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image } from 'cloudinary-react';
import classNames from 'classnames';
import './CharactersSelection.scss';
import { loadCharacters } from '../../store/actions';
// characterClickedHandler(id) {
//     const { characters } = this.state;
//     const character = characters[id];
//     const result = {
//         ...characters,
//         [id]: {
//             ...character,
//             focused: !character.focused,
//         },
//     };
//     this.setState({
//         characters: result,
//     });
// }

class CharactersSelection extends Component {
    constructor(props) {
        super(props);
        this.loadData = props.loadData;
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <div className="characters-selection flex flex-wrap flex-around">
                {
                    Object.entries(this.props.characters).map(([id, { imageUrl, focused }]) => (
                        <div
                            className={classNames('character-head', { focused })}
                            key={id}
                        >
                            <Image key={id} publicId={`mk8dxRandomer/characters/${imageUrl}`} width="36" />
                        </div>
                    ))
                }
            </div>
        );
    }
}

CharactersSelection.propTypes = {
    loadData: PropTypes.func,
    characters: PropTypes.objectOf(PropTypes.shape({
        imageUrl: PropTypes.string,
        focused: PropTypes.bool,
    })),
};

export default connect(
    ({ characters }) => ({ characters }),
    (dispatch) => ({
        loadData: () => dispatch(loadCharacters()),
    }),
)(CharactersSelection);
