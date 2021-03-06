import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withProps } from 'recompose';
import Layout from '../Layout';
import CharactersSelection from '../CharactersSelection';
import Randomer from '../Randomer';
import Results from '../Results';
import NotFound from '../NotFound';

const Routes = () => (
    <Switch>
        <Route
            path="/"
            exact
            component={
                withProps({
                    component: Randomer,
                    focus: 'random',
                })(Layout)
            }
        />
        <Route
            path="/characters"
            exact
            component={
                withProps({
                    component: CharactersSelection,
                    focus: 'characters',
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
                    back: true,
                })(Layout)
            }
        />
        <Route
            component={withProps({
                component: NotFound,
                displayTabs: false,
                text: 'notFound',
            })(Layout)}
        />
    </Switch>
);

export default Routes;
