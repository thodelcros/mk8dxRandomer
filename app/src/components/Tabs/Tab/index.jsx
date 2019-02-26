import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './Tab.scss';

const Tab = ({ value, path, focused = false, changeTab }) => (
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
            onClick={
                !focused ?
                    () => changeTab() :
                    null
            }
        >
            <span>{value}</span>
        </div>
    </Link>
);

Tab.propTypes = {
    value: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    focused: PropTypes.bool,
    changeTab: PropTypes.func.isRequired,
};

export default Tab;
