import firebase from 'firebase';

firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    databaseURL: 'https://mk8dxrandomer.firebaseio.com',
});

const db = firebase.database();

// export const getCharacters = async () => {
//     const snapshot = await db.ref('/characters').once('value');

//     return snapshot.val();
// };

export const getCharacters = db.ref('/characters').once('value');
export const getWheels = db.ref('/wheels').once('value');
export const getGliders = db.ref('/gliders').once('value');
export const getVehicules = db.ref('/vehicules').once('value');
