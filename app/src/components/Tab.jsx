import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tab.scss';

const Tab = ({ value, focus = false }) => (
    <div className={classNames(
        'tab',
        {
            focus,
            red: 'Personnages' === value,
            blue: 'Aléatoire' === value,
        },
    )}
    >
        <span>{value}</span>
    </div>
);

Tab.propTypes = {
    value: PropTypes.string.isRequired,
    focus: PropTypes.bool,
};

export default Tab;
