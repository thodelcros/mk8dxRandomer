import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { omit, isEmpty } from 'lodash/fp';
import Character from './Character';
import Items from './Items';
import Navigation from './Navigation';
import './Results.scss';

const Results = ({ randomCompos, activeCompo }) => (
    <div className="results flex flex-around-column">
        {!isEmpty(randomCompos) ? (
            <Fragment>
                <Character character={randomCompos[activeCompo].character} />
                <Items items={omit('character')(randomCompos[activeCompo])} />
                <Navigation />
            </Fragment>
        ) : (
            <div className="loader flex flex-around">
                <Loader type="Oval" color="#ED0000" />
            </div>
        )}
    </div>
);

Results.propTypes = {
    randomCompos: PropTypes.shape({}).isRequired,
    activeCompo: PropTypes.number.isRequired,
};

export default connect(({ randomCompos, activeCompo }) => ({ randomCompos, activeCompo }))(Results);
