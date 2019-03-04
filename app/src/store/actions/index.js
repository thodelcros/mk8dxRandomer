import { sampleSize, get } from 'lodash/fp';
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
        const dbRes = await db.ref(`/${type}`).once('value');
        const items = await dbRes.val();
        // eslint-disable-next-line no-param-reassign
        firebaseData[type] = items;

        return firebaseData;
    }, Promise.resolve({}));
    dispatch(setData(data));
};

export const toggleLoading = () => ({
    type: 'TOGGLE_LOADING',
});

const getCompos = (getState, size) => {
    const rawData = types.reduce((obj, type) => {
        const data = get(type)(getState());
        // eslint-disable-next-line no-param-reassign
        obj[type] = sampleSize(size)(data);

        return obj;
    }, {});

    return [...Array(size)].reduce((obj, compo, index) => {
        // eslint-disable-next-line no-param-reassign
        obj[index] = {
            character: rawData.characters[index],
            glider: rawData.gliders[index],
            vehicule: rawData.vehicules[index],
            wheels: rawData.wheels[index],
        };

        return obj;
    }, {});
};

const switchItem = (getState, type) => {
    const data = get(type)(getState());
    const newItems = sampleSize(1)(data);

    return newItems[0];
};

export const randomize = (method, type) => (dispatch, getState) => {
    const { nbOfCompo, activeCompo, randomCompos } = getState();
    let compos = {};
    switch (method) {
        case 'item': {
            const compo = randomCompos[activeCompo];
            compos = {
                ...randomCompos,
                [activeCompo]: {
                    ...compo,
                    [getTypeKey(type)]: switchItem(getState, type),
                },
            };
            break;
        }

        default:
            compos = getCompos(getState, nbOfCompo);
            break;
    }
    dispatch(setRandomCompos(compos));
};

export const navigateCompo = (direction) => ({
    type: 'NAVIGATE_COMPO',
    direction,
});
