import React from 'react';
import { Image } from 'cloudinary-react';
import './Character.scss';

const Character = () => (
    <div className="character flex flex-between">
        <div className="infos">
            <p>Peach</p>
            <p>Moyen</p>
        </div>
        <div className="image">
            <Image publicId="mk8dxRandomer/characters/peach.png" width="100" />
        </div>
    </div>
);

export default Character;
