import { sampleSize, get } from 'lodash/fp';

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

export const randomize = () => (dispatch, getState) => {
    const nbOfCompo = get('nbOfCompo')(getState());
    const rawData = types.reduce((obj, type) => {
        const data = get(type)(getState());
        // eslint-disable-next-line no-param-reassign
        obj[type] = sampleSize(nbOfCompo)(data);

        return obj;
    }, {});
    const compos = [...Array(nbOfCompo)].reduce((obj, compo, index) => {
        // eslint-disable-next-line no-param-reassign
        obj[index] = {
            character: rawData.characters[index],
            glider: rawData.gliders[index],
            vehicule: rawData.vehicules[index],
            wheels: rawData.wheels[index],
        };

        return obj;
    }, {});
    dispatch(setRandomCompos(compos));
};

export const navigateCompo = (direction) => ({
    type: 'NAVIGATE_COMPO',
    direction,
});
