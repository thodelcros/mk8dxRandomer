import { set } from 'lodash/fp';

const initialState = {
    characters: {},
    randomTabFocused: true,
    focusedCharacters: {},
    nbOfCompo: 1,
};

const reducer = (state = initialState, { type, ...payload }) => {
    const { characters, randomTabFocused, focusedCharacters, nbOfCompo } = state;

    switch (type) {
        case 'SWITCH_TAB':
            return set('randomTabFocused', !randomTabFocused, state);
        case 'INCREMENT_NB_OF_COMPO':
            return set('nbOfCompo', Math.min(nbOfCompo + 1, 12), state);
        case 'DECREMENT_NB_OF_COMPO':
            return set('nbOfCompo', Math.max(nbOfCompo - 1, 1), state);
        case 'SET_DATA':
            return set('characters', payload.data, state);
        default:
            return state;
    }
};

export default reducer;
