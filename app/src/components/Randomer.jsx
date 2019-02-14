import React, { Component } from 'react';
import { Image } from 'cloudinary-react';

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
        this.setState({
            number: this.state.number - 1,
        });
    }

    render() {
        return (
            <div className="randomer">
                <div className="flex flex-between">
                    <p>Nombre de personnages à générer</p>
                    <Image publicId="mk8dxRandomer/public/cameraman" width="75" />
                </div>
                <div className="flex flex-start-column">
                    <p>{this.state.number}</p>
                    <p>{this.state.number > 1 ? 'compos' : 'compo' }</p>
                    <button onClick={() => this.onIncrement()}>+</button>
                    <button onClick={() => this.onDecrement()}>-</button>
                </div>
            </div>
        );
    }
}

export default Randomer;
