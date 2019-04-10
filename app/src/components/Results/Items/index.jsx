import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Items = ({ items: { vehicule, glider, wheels } }) => (
    <div className="items">
        <Item item={vehicule} type="vehicules" />
        <Item item={glider} type="gliders" />
        <Item item={wheels} type="wheels" />
    </div>
);

Items.propTypes = {
    items: PropTypes.shape({}).isRequired,
};

export default Items;
