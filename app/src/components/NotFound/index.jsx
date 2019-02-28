import React from 'react';
import { Image } from 'cloudinary-react';
import './NotFound.scss';

const NotFound = () => (
    <div className="not-found flex flex-around">
        <div>
            <Image publicId="Mk8dxRandomer/public/not-found.gif" width="200" />
            <h1>La page que vous demandez n&apos;existe pas hélas...</h1>
            <p>Cliquez sur le logo pour retrouver retourner au générateur</p>
        </div>
    </div>
);

export default NotFound;
