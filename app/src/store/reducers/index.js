import { set, flow } from 'lodash/fp';

const initialState = {
    characters: {},
    wheels: {},
    gliders: {},
    vehicules: {},
    randomTabFocused: true,
    focusedCharacters: {},
    nbOfCompo: 1,
    loading: false,
};

const reducer = (state = initialState, { type, ...payload }) => {
    const { randomTabFocused, nbOfCompo, loading } = state;

    switch (type) {
        case 'SWITCH_TAB':
            return set('randomTabFocused', !randomTabFocused, state);
        case 'SET_RANDOM_TAB':
            return set('randomTabFocused', true, state);
        case 'CHANGE_NB_OF_COMPO':
            if ('decrement' === payload.action) {
                return set('nbOfCompo', Math.max(nbOfCompo - 1, 1), state);
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
        default:
            return state;
    }
};

export default reducer;
