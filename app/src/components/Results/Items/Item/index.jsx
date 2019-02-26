import React from 'react';
import { Image } from 'cloudinary-react';
import './Item.scss';

const Item = () => (
    <div className="item flex flex-between">
        <Image publicId="mk8dxRandomer/vehicules/flamboyante.png" width="90" />
        <div className="infos">
            <p>Flamboyante</p>
            <button className="switch-button">
                Switch !
            </button>
        </div>
    </div>
);

export default Item;
