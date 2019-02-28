export const changeNbOfCompo = (action) => ({
    type: 'CHANGE_NB_OF_COMPO',
    action,
});

export const setData = (data) => ({
    type: 'SET_DATA',
    data,
});

const types = ['characters', 'wheels', 'gliders', 'vehicules'];

export const loadData = () => async (dispatch, _, db) => {
    const data = await types.reduce(async (obj, type) => {
        const dbRes = await db.ref(`/${type}`).once('value');
        const items = await dbRes.val();
        // eslint-disable-next-line no-param-reassign
        obj[type] = items;

        return obj;
    }, {});
    dispatch(setData(data));
};

export const toggleLoading = () => ({
    type: 'TOGGLE_LOADING',
});

// export const randomize = () => (dispatch) => {
//     getCharacters.then((snapshot) => {
//         const characters = snapshot.values
//     })

// };
