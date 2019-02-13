import React from 'react';
import { CloudinaryContext } from 'cloudinary-react';
import App from './components/App';

const Root = () => (
    <CloudinaryContext cloudName={process.env.CLOUDINARY_CLOUD_NAME}>
        <App />
    </CloudinaryContext>
);

export default Root;
