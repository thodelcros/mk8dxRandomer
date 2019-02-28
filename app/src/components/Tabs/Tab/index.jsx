import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './Tab.scss';

const Tab = ({ value, path, focused = false }) => (
    <Link to={path}>
        <div
            className={classNames(
                'tab',
                {
                    focused,
                    red: 'Personnages' === value,
                    blue: 'Aléatoire' === value,
                },
            )}
        >
            <span>{value}</span>
        </div>
    </Link>
);

Tab.propTypes = {
    value: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    focused: PropTypes.bool,
};

export default Tab;
