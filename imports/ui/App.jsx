import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';


// App component - represents the whole app
export default class App extends Component {

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Json overskrift</h1>

                </header>

                <ul>
                    <li>
                        <button id="btn">dette er en knapp</button>
                        <p>Hei</p>
                    </li>
                </ul>
            </div>
        );
    }
}

