import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';


// App component - represents the whole app
export default class Liste extends Component {

    renderTrans(){
        let transArray = [];
        let sumInn = 0;
        let sumUt = 0;
        for(let i = 0; i < this.props.animal.length; i++ ){
            if ( this.props.trans[i].belop > 0 ){
                transArray.push(
                    <th> <tr>{this.props.trans[i].dato}</tr>
                        <tr>{this.props.trans[i].beksrivelse}</tr>
                        <tr>{this.props.trans[i].belop} </tr>
                        <tr></tr>
                    </th>
                )
            } else {
                transArray.push(
                    <th> <tr>{this.props.trans[i].dato}</tr>
                        <tr>{this.props.trans[i].beksrivelse}</tr>
                        <tr></tr>
                        <tr>{this.props.trans[i].belop}</tr>
                    </th>
                )
            }
        }
        return transArray;
    }
    render() {


        return (
            <div>
                {this.renderTrans()}
            </div>
        );
    }
}

Liste.propTypes = {
    trans: PropTypes.array.isRequired,
};