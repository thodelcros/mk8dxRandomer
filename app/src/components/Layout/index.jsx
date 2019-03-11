import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import Wrapper from '../Wrapper';
import Header from '../Header';
import Actions from '../Actions';
import Main from '../Main';
import Tabs from '../Tabs';

const Layout = ({ component: Component, text, displayTabs, focus, back, match: { path } }) => (
    <Fragment>
        <Navbar />
        <Wrapper>
            <Header text={text} />
            <Main>
                {displayTabs ? <Tabs focus={focus} /> : null}
                <Component />
            </Main>
            <Actions back={back} current={path} />
        </Wrapper>
    </Fragment>
);

Layout.propTypes = {
    component: PropTypes.func.isRequired,
    text: PropTypes.string,
    displayTabs: PropTypes.bool,
    focus: PropTypes.string,
    back: PropTypes.bool,
    match: PropTypes.shape({
        path: PropTypes.string.isRequired,
    }).isRequired,
};

Layout.defaultProps = {
    text: 'home',
    displayTabs: true,
    focus: 'random',
    back: false,
};

export default Layout;
