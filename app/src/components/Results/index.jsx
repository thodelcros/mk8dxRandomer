import React from 'react';
import Character from './Character';
import Items from './Items';
import Navigation from './Navigation';
import './Results.scss';

const Results = () => (
    <div className="results">
        <Character />
        <Items />
        <Navigation />
    </div>
);

export default Results;
