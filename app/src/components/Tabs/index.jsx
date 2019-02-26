import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tab from './Tab';
import { switchTab } from '../../store/actions';

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

const Tabs = ({ randomTabFocused, changeTab }) => (
    <div className="tabs flex flex-center">
        <Tab
            value={tabs.random.name}
            path={tabs.random.path}
            focused={randomTabFocused}
            changeTab={changeTab}
        />
        <Tab
            value={tabs.characters.name}
            path={tabs.characters.path}
            focused={!randomTabFocused}
            changeTab={changeTab}
        />
    </div>
);

Tabs.propTypes = {
    randomTabFocused: PropTypes.bool.isRequired,
    changeTab: PropTypes.func.isRequired,
};

export default connect(
    ({ randomTabFocused }) => ({ randomTabFocused }),
    (dispatch) => ({
        changeTab: () => dispatch(switchTab()),
    }),
)(Tabs);
