import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import './Randomer.scss';

class Randomer extends Component {
    constructor() {
        super();

        this.state = {
            number: 0,
        };

        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    onIncrement() {
        this.setState({
            number: this.state.number + 1,
        });
    }

    onDecrement() {
        if (this.state.number > 0) {
            this.setState({
                number: this.state.number - 1,
            });
        }
    }

    render() {
        return (
            <div className="randomer">
                <div className="flex flex-between randomer-header">
                    <h2>Nombre de personnages à générer</h2>
                    <Image publicId="mk8dxRandomer/public/cameraman" width="75" />
                </div>
                <div className="flex flex-start-column randomer-controls">
                    <p>{this.state.number}</p>
                    <p>{this.state.number > 1 ? 'compos' : 'compo' }</p>
                    <div className="buttons">
                        <button className="secondary-button" onClick={() => this.onIncrement()}>+</button>
                        <button className="secondary-button" onClick={() => this.onDecrement()}>-</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Randomer;
