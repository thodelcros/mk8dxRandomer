import { sampleSize, get, pull, flow, filter } from 'lodash/fp';
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

const getFocusedCharacters = (characters) => flow(
    Object.values,
    filter(({ focused }) => focused),
)(characters);

const getCompos = (getState, size, withoutCharacters = false) => {
    const rawData = [
        ...withoutCharacters ? pull('characters')(types) : types,
    ].reduce((obj, type) => {
        // eslint-disable-next-line no-param-reassign
        obj[type] = sampleSize(size)(get(type)(getState()));

        return obj;
    }, {});
    const { characters } = getState();

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

const switchItem = (getState, type) => sampleSize(1)(get(type)(getState()))[0];

export const toggleCharacterSelection = (id) => ({
    type: 'TOGGLE_CHARACTER_SELECTION',
    id,
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
                    [getTypeKey(type)]: switchItem(getState, type),
                },
            };
            break;
        }
        case 'onlyItems': {
            const nbOfFocusedCharacters = getFocusedCharacters(characters).length;
            console.log(getFocusedCharacters(characters));
            compos = getCompos(getState, nbOfFocusedCharacters, true);
            console.log(compos);
            break;
        }

        default:
            compos = getCompos(getState, nbOfCompo);
            dispatch(navigateCompo('beginning'));
            break;
    }
    dispatch(setRandomCompos(compos));
};
