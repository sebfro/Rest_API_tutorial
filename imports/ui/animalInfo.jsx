import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';


// App component - represents the whole app
export default class AnimalInfo extends Component {

    renderAnimals(){
        let animalArray = [];
        for(let i = 0; i < this.props.animal.length; i++ ){
            animalArray.push(
                <li>{this.props.animal[i].name} er en {this.props.animal[i].species}</li>
            )
        }
        return animalArray;
    }
    render() {


        return (
            <div>
                {this.renderAnimals()}
            </div>
        );
    }
}

AnimalInfo.propTypes = {
    animal: PropTypes.array.isRequired,
};