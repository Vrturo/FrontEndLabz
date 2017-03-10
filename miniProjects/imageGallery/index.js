import React, { Component } from 'react';
import { render } from 'react-dom';

class Home extends Component {
    render() {
        return (
            <div className="main">
                <h1>Galleria</h1>
            </div>
        );
    }
}

render(<Home />, document.getElementById('container'));
