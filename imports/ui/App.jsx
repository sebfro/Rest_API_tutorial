import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';

import AnimalInfo from './animalInfo.jsx';

let counter = 1;
// App component - represents the whole app
export default class App extends Component {

    getInfo(e) {
        e.preventDefault();
        let req = new XMLHttpRequest();
        if (counter < 4) {
            req.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + counter + '.json');
            req.onload = function () {
                let data = JSON.parse(req.responseText);

                ReactDOM.render(<AnimalInfo animal={data}/>, document.getElementById("animal-info" + counter));
            };
            req.send();
            if(counter < 3) {
                counter++;
            } else {
                counter = 1;
            }
        }

    }


    render() {
        return (
            <div className="container">
                <header>
                    <h1>Liste over dyr</h1>

                </header>

                <ul>
                    <li>
                        <button id="btn" onClick={this.getInfo.bind(this)}>dette er en knapp</button>
                    </li>
                    <div id="animal-info1"></div>
                    <div id="animal-info2"></div>
                    <div id="animal-info3"></div>
                </ul>
            </div>
        );
    }
}

