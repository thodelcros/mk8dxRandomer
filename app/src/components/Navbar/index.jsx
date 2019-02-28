import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setRandomTab } from '../../store/actions';
import './Navbar.scss';

const Navbar = ({ focusRandomTab }) => (
    <div className="navbar flex-column">
        <Link to="/">
            <Image publicId="mk8dxRandomer/public/logo" width="150" onClick={focusRandomTab} />
        </Link>
    </div>
);

Navbar.propTypes = {
    focusRandomTab: PropTypes.func.isRequired,
}

export default connect(
    null,
    (dispatch) => ({
        focusRandomTab: () => dispatch(setRandomTab()),
    }),
)(Navbar);
