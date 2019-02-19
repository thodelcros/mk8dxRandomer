import React, { Component } from 'react';
import Tab from './Tab';
import Randomer from './Randomer';
import CharactersSelection from './CharactersSelection';
import './Main.scss';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            random: false,
        };
        this.onTabClicked = this.onTabClicked.bind(this);
    }

    onTabClicked(event) {
        console.log(event);
        this.setState({
            random: true,
        });
    }

    render() {
        return (
            <div className="main block">
                <div className="tabs flex flex-center">
                    <Tab value="Personnages" focus={!this.state.random} onClick={(event) => this.onTabClicked(event)} />
                    <Tab value="Aléatoire" focus={this.state.random} onClick={(event) => this.onTabClicked(event)} />
                </div>
                {this.state.random ? <Randomer /> : <CharactersSelection characters={this.props.characters} />}
            </div>
        );
    }
}

export default Main;
