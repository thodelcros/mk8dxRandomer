import React from 'react';
import { Link } from 'react-router-dom';
import './Actions.scss';

const Actions = () => (
    <div className="actions block">
        <Link to="/results">
            <button className="primary-button flex-center">
                <i className="fas fa-random" />
                <p>Start</p>
            </button>
        </Link>
    </div>
);

export default Actions;
