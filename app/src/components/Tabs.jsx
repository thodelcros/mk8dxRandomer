import React from 'react';
import Tab from './Tab';

const Tabs = () => (
    <div className="tabs flex flex-center">
        <Tab value="Personnages" focus />
        <Tab value="Aléatoire" />
    </div>
);

export default Tabs;
