import React, { Fragment, Component } from 'react';
import { getCharacters } from '../firebase';
import Navbar from './Navbar';
import Layout from './Layout';
import Header from './Header';
import Actions from './Actions';
import Main from './Main';

class App extends Component {
    constructor(props) {
        super(props);
        this.getCharacters = getCharacters;
        this.state = {
            characters: null,
            random: false,
        };
    }

    componentDidMount() {
        this.getCharacters.then((snapshot) => {
            const characters = snapshot.val();
        });
    }

    render() {
        const mainComponent = this.state.random ? 'random' : 'characters';

        return (
            <Fragment>
                <Navbar />
                <Layout>
                    <Header text="home" />
                    <Main component={mainComponent} />
                    <Actions />
                </Layout>
            </Fragment>
        );
    }
}

export default App;
