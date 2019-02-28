import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const tabs = {
    characters: {
        path: '/characters',
        name: 'Personnages',
    },
    random: {
        path: '/',
        name: 'Aléatoire',
    },
};

const Tabs = ({ focus }) => (
    <div className="tabs flex flex-center">
        <Tab
            value={tabs.random.name}
            path={tabs.random.path}
            focused={'random' === focus}
        />
        <Tab
            value={tabs.characters.name}
            path={tabs.characters.path}
            focused={'characters' === focus}
        />
    </div>
);

Tabs.propTypes = {
    focus: PropTypes.string,
};

export default Tabs;
