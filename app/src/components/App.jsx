import React, { Fragment, Component } from 'react';
import { getCharacters } from '../firebase';
import Navbar from './Navbar';
import Layout from './Layout';
import Header from './Header';
import Main from './Main';

class App extends Component {
    constructor(props) {
        super(props);
        this.getCharacters = getCharacters;
    }

    componentDidMount() {
        this.getCharacters.then((snapshot) => {
            const characters = snapshot.val();
        });
    }

    render() {
        return (
            <Fragment>
                <Navbar />
                <Layout>
                    <Header text="home" />
                    <Main />
                </Layout>
            </Fragment>
        );
    }
}

export default App;
