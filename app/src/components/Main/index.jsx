import React from 'react';
import PropTypes from 'prop-types';
import './Main.scss';

const Main = ({ children }) => (
    <div className="main block">
        {children}
    </div>
);

Main.propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Main;
