import { set, flow } from 'lodash/fp';

const initialState = {
    characters: {},
    wheels: {},
    gliders: {},
    vehicules: {},
    nbOfCompo: 1,
    loading: false,
    randomCompos: {},
    activeCompo: 0,
    error: null,
};

const reducer = (state = initialState, { type, ...payload }) => {
    const { nbOfCompo, loading, activeCompo, characters, randomCompos } = state;

    switch (type) {
        case 'CHANGE_NB_OF_COMPO':
            if ('decrement' === payload.action) {
                return set('nbOfCompo', Math.max(nbOfCompo - 1, 1), state);
            }

            if ('reset' === payload.action) {
                return set('nbOfCompo', 1, state);
            }

            return set('nbOfCompo', Math.min(nbOfCompo + 1, 12), state);
        case 'SET_DATA':
            return flow(
                set('characters', payload.data.characters),
                set('wheels', payload.data.wheels),
                set('gliders', payload.data.gliders),
                set('vehicules', payload.data.vehicules),
            )(state);
        case 'TOGGLE_LOADING':
            return set('loading', loading, state);
        case 'SET_RANDOM_COMPOS':
            return set('randomCompos', payload.compos, state);
        case 'NAVIGATE_COMPO':
            if ('previous' === payload.direction) {
                return set('activeCompo', Math.max(activeCompo - 1, 0), state);
            }
            if ('beginning' === payload.direction) {
                return set('activeCompo', 0, state);
            }

            return set('activeCompo', Math.min(activeCompo + 1, Object.keys(randomCompos).length - 1), state);
        case 'TOGGLE_CHARACTER_SELECTION':
            return set(['characters', payload.id, 'focused'], !characters[payload.id].focused, state);
        case 'RESET_CHARACTERS_SELECTION':
            return set('characters', payload.characters, state);
        default:
            return state;
    }
};

export default reducer;
