import { mapValues } from 'lodash/fp';
import { getCharacters } from '../../firebase';

export const switchTab = () => ({
    type: 'SWITCH_TAB',
});

export const incrementNbOfCompo = () => ({
    type: 'INCREMENT_NB_OF_COMPO',
});

export const decrementNbOfCompo = () => ({
    type: 'DECREMENT_NB_OF_COMPO',
});

const setData = (data) => ({
    type: 'SET_DATA',
    data,
});

export const loadCharacters = () => (dispatch) => {
    getCharacters.then((snapshot) => {
        const data = snapshot.val();
        const characters = mapValues((value) => ({
            ...value,
            focused: false,
        }))(data);

        return dispatch(setData(characters));
    });
};
