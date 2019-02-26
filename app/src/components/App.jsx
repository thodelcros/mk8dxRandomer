import React, { Component } from 'react';
import { CloudinaryContext } from 'cloudinary-react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import reducer from '../store/reducers';
import Routes from './Routes';

class App extends Component {
    constructor() {
        super();
        this.history = createBrowserHistory();
        /* eslint-disable no-underscore-dangle */
        this.composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        /* eslint-enable */
        this.store = createStore(
            reducer,
            this.composeEnhancers(applyMiddleware(thunk)),
        );
    }

    render() {
        return (
            <Provider store={this.store}>
                <CloudinaryContext cloudName={process.env.CLOUDINARY_CLOUD_NAME}>
                    <Router history={this.history}>
                        <Routes />
                    </Router>
                </CloudinaryContext>
            </Provider>
        );
    }
}

export default App;
