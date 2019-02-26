import React from 'react';
import PropTypes from 'prop-types';
import content from '../../utils/content/content';
import './Header.scss';

const Header = ({ text }) => (
    <div className="header block">
        {content[text]}
    </div>
);

Header.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Header;
