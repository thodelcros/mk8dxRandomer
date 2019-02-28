import React, { Fragment } from 'react';

const home = (
    <h2>
        Génère une composition <strong>aléatoire</strong>, ou commence avec tes <strong>personnages favoris</strong>
    </h2>
);
const results = (
    <h2>
        Si il te manque un item, <strong>switch</strong> pour générer juste la partie concernée
    </h2>
);

const notFound = (
    <Fragment>
        <h2>¯\_(ツ)_/¯</h2>
        <h2>
            Erreur 404
        </h2>
    </Fragment>
);

const content = {
    home,
    results,
    notFound,
};

export default content;
