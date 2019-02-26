import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Tabs';
import './Main.scss';

const Main = ({ children, displayTabs }) => (
    <div className="main block">
        {displayTabs ? <Tabs /> : null}
        {children}
    </div>
);

Main.propTypes = {
    children: PropTypes.shape({}).isRequired,
    displayTabs: PropTypes.bool,
};

export default Main;
