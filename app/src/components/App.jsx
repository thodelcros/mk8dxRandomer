import React, { Fragment, Component } from 'react';
import { getCharacters } from '../firebase';
import Navbar from './Navbar';

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
            </Fragment>
        );
    }
}

export default App;
