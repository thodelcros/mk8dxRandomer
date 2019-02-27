import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withProps } from 'recompose';
import Layout from '../Layout';
import CharactersSelection from '../CharactersSelection';
import Randomer from '../Randomer';
import Results from '../Results';

const Routes = () => (
    <Switch>
        <Route
            path="/"
            exact
            component={
                withProps({
                    component: Randomer,
                })(Layout)
            }
        />
        <Route
            path="/characters"
            exact
            component={
                withProps({
                    component: CharactersSelection,
                })(Layout)
            }
        />
        <Route
            path="/results"
            exact
            component={
                withProps({
                    component: Results,
                    displayTabs: false,
                    text: 'results',
                })(Layout)
            }
        />
    </Switch>
);

export default Routes;