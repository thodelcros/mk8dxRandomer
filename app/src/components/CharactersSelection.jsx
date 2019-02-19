import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';
import classNames from 'classnames';
import { getCharacters } from '../firebase';
import './CharactersSelection.scss';

class CharactersSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: {},
        };
        this.getCharacters = getCharacters;
        this.characterClickedHandler = this.characterClickedHandler.bind(this);
    }

    componentDidMount() {
        this.getCharacters.then((snapshot) => {
            const data = snapshot.val();
            const characters = {};
            Object.entries(data).forEach(([key, value]) => {
                characters[key] = {
                    ...value,
                    focused: false,
                };
            });
            this.setState({ characters });
        });
    }

    characterClickedHandler(id) {
        const { characters } = this.state;
        const character = characters[id];
        const result = {
            ...characters,
            [id]: {
                ...character,
                focused: !character.focused,
            },
        };
        this.setState({
            characters: result,
        });
    }

    render() {
        return (
            <div className="characters-selection flex flex-wrap flex-around">
                {
                    Object.entries(this.state.characters).map(([id, { imageUrl, focused }]) => (
                        <div className={classNames('character-head', { focused })} key={id} onClick={() => this.characterClickedHandler(id)}>
                            <Image key={id} publicId={`mk8dxRandomer/characters/${imageUrl}`} width="36" />
                        </div>
                    ))
                }
            </div>
        );
    }
}

CharactersSelection.propTypes = {
    characters: PropTypes.shape({}),
};

export default CharactersSelection;
