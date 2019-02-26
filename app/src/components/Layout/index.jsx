import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import Wrapper from '../Wrapper';
import Header from '../Header';
import Actions from '../Actions';
import Main from '../Main';

const Layout = ({ component: Component, text = 'home', displayTabs = true }) => (
    <Fragment>
        <Navbar />
        <Wrapper>
            <Header text={text} />
            <Main displayTabs={displayTabs}>
                <Component />
            </Main>
            <Actions />
        </Wrapper>
    </Fragment>
);

Layout.propTypes = {
    component: PropTypes.func.isRequired,
    text: PropTypes.string,
    displayTabs: PropTypes.bool,
};

export default Layout;
