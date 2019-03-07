import { sampleSize, get, pull, flow, filter, reduce } from 'lodash/fp';
import getTypeKey from '../../utils/content/getTypeKey';

const types = ['characters', 'wheels', 'gliders', 'vehicules'];

export const changeNbOfCompo = (action) => ({
    type: 'CHANGE_NB_OF_COMPO',
    action,
});

const setData = (data) => ({
    type: 'SET_DATA',
    data,
});

const setRandomCompos = (compos) => ({
    type: 'SET_RANDOM_COMPOS',
    compos,
});

export const loadData = () => async (dispatch, _, db) => {
    const data = await types.reduce(async (previousPromise, type) => {
        const firebaseData = await previousPromise;
        const dbRes = await db
            .ref(`/${type}`)
            .once('value');
        const dbItems = await dbRes.val();
        firebaseData[type] = Object
            .entries(dbItems)
            .reduce((obj, [id, character]) => {
                // eslint-disable-next-line no-param-reassign
                obj[id] = { ...character, focused: false };

                return obj;
            }, {});

        return firebaseData;
    }, Promise.resolve({}));
    dispatch(setData(data));
};

export const toggleLoading = () => ({
    type: 'TOGGLE_LOADING',
});

export const navigateCompo = (direction) => ({
    type: 'NAVIGATE_COMPO',
    direction,
});

export const getFocusedCharacters = (characters) => flow(
    Object.values,
    filter(({ focused }) => focused),
)(characters);

const createCompos = (state, size, withoutCharacters = false) => {
    const rawData = [
        ...withoutCharacters ? pull('characters')(types) : types,
    ].reduce((obj, type) => {
        // eslint-disable-next-line no-param-reassign
        obj[type] = sampleSize(size)(get(type)(state));

        return obj;
    }, {});
    const { characters } = state;

    return [...Array(size)].reduce((obj, compo, index) => {
        // eslint-disable-next-line no-param-reassign
        obj[index] = {
            character: withoutCharacters ? getFocusedCharacters(characters)[index] : rawData.characters[index],
            glider: rawData.gliders[index],
            vehicule: rawData.vehicules[index],
            wheels: rawData.wheels[index],
        };

        return obj;
    }, {});
};

const switchItem = (state, type) => sampleSize(1)(get(type)(state))[0];

export const toggleCharacterSelection = (id) => ({
    type: 'TOGGLE_CHARACTER_SELECTION',
    id,
});

const resetCharactersSelection = (characters) => ({
    type: 'RESET_CHARACTERS_SELECTION',
    characters: Object.entries(characters)
        .reduce((obj, [id, character]) => {
            // eslint-disable-next-line no-param-reassign
            obj[id] = { ...character, focused: false };

            return obj;
        }, {}),
});

export const randomize = (method, type) => (dispatch, getState) => {
    const { nbOfCompo, activeCompo, randomCompos, characters } = getState();
    let compos = {};
    switch (method) {
        case 'item': {
            compos = {
                ...randomCompos,
                [activeCompo]: {
                    ...randomCompos[activeCompo],
                    [getTypeKey(type)]: switchItem(getState(), type),
                },
            };
            break;
        }
        case 'onlyItems': {
            const nbOfFocusedCharacters = getFocusedCharacters(characters).length;
            compos = createCompos(getState(), nbOfFocusedCharacters, true);
            break;
        }

        default:
            compos = createCompos(getState(), nbOfCompo);
            dispatch(navigateCompo('beginning'));
            break;
    }
    dispatch(setRandomCompos(compos));
    dispatch(resetCharactersSelection(characters));
};
