import React from 'react';
import { CloudinaryContext } from 'cloudinary-react';
import App from './components/App';

const Root = () => (
    <CloudinaryContext cloudName="thodelcros">
        <App />
    </CloudinaryContext>
);

export default Root;
