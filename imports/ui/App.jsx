import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';

import AnimalInfo from './animalInfo.jsx';
import Liste from './liste.jsx';

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

    getSaldo(){
        /*
        let req = new XMLHttpRequest();
        //req.open('GET', 'https://skbank.azurewebsites.net/api/transaksjon');
        req.onload = function(){
            let data = JSON.parse({"kontonavn":"Brukskonto","saldo":23254.9,"transaksjoner":[{"transaksjonsID":0,"kategoriID":3,"dato":"2017-03-01T00:00:00","beloep":20382.0,"beskrivelse":"Lønn fra ACME AS"},{"transaksjonsID":1,"kategoriID":2,"dato":"2017-03-02T00:00:00","beloep":-300.0,"beskrivelse":"Uttak minibank Oasen"},{"transaksjonsID":2,"kategoriID":4,"dato":"2017-03-02T00:00:00","beloep":-722.2,"beskrivelse":"Meny Oasen"},{"transaksjonsID":3,"kategoriID":7,"dato":"2017-03-03T00:00:00","beloep":-300.0,"beskrivelse":"Overføring mellom egne konto"},{"transaksjonsID":4,"kategoriID":8,"dato":"2017-03-04T00:00:00","beloep":-85.99,"beskrivelse":"McDonalds Oasen"},{"transaksjonsID":5,"kategoriID":6,"dato":"2017-03-05T00:00:00","beloep":-3082.0,"beskrivelse":"Fjordkraft"},{"transaksjonsID":6,"kategoriID":8,"dato":"2017-03-06T00:00:00","beloep":-438.37,"beskrivelse":"Egon Lagunen"},{"transaksjonsID":7,"kategoriID":6,"dato":"2017-03-06T00:00:00","beloep":-1984.0,"beskrivelse":"Canal Digital"},{"transaksjonsID":8,"kategoriID":6,"dato":"2017-03-08T00:00:00","beloep":-299.0,"beskrivelse":"Telenor"},{"transaksjonsID":9,"kategoriID":5,"dato":"2017-03-08T00:00:00","beloep":-2941.58,"beskrivelse":"Komplett.no"},{"transaksjonsID":10,"kategoriID":7,"dato":"2017-03-09T00:00:00","beloep":500.0,"beskrivelse":"Overføring mellom egne konto"},{"transaksjonsID":11,"kategoriID":4,"dato":"2017-03-10T00:00:00","beloep":-132.0,"beskrivelse":"Bunnpris Smiberget"},{"transaksjonsID":12,"kategoriID":9,"dato":"2017-03-10T00:00:00","beloep":-694.0,"beskrivelse":"Skyss"},{"transaksjonsID":13,"kategoriID":4,"dato":"2017-03-10T00:00:00","beloep":-342.0,"beskrivelse":"Coop Extra Bønes"},{"transaksjonsID":14,"kategoriID":6,"dato":"2017-03-12T00:00:00","beloep":-4553.0,"beskrivelse":"Lyshovden Brl"},{"transaksjonsID":15,"kategoriID":7,"dato":"2017-03-14T00:00:00","beloep":500.0,"beskrivelse":"Overføring mellom egne konto"},{"transaksjonsID":16,"kategoriID":5,"dato":"2017-03-16T00:00:00","beloep":-1135.62,"beskrivelse":"Elkjøp Fyllingsdalen"},{"transaksjonsID":17,"kategoriID":4,"dato":"2017-03-16T00:00:00","beloep":-746.12,"beskrivelse":"Meny Oasen"},{"transaksjonsID":18,"kategoriID":9,"dato":"2017-03-17T00:00:00","beloep":-492.42,"beskrivelse":"Bergen Taxi"}]});

            ReactDOM.render( <h1>{data.kontonavn}</h1>, document.getElementById("kontonavn"));
            ReactDOM.render( <p>Saldo: {data.saldo} </p>, document.getElementById("saldo"));
            ReactDOM.render( <Liste trans={data.transaksjoner}/>, document.getElementById("transTable"));
        };
        req.error = function(){
            console.log("error");
        };
        req.send();
    */
        let data = JSON.parse('{"kontonavn":"Brukskonto","saldo":23254.9,"transaksjoner":[{"transaksjonsID":0,"kategoriID":3,"dato":"2017-03-01T00:00:00","beloep":20382.0,"beskrivelse":"Lønn fra ACME AS"},{"transaksjonsID":1,"kategoriID":2,"dato":"2017-03-02T00:00:00","beloep":-300.0,"beskrivelse":"Uttak minibank Oasen"},{"transaksjonsID":2,"kategoriID":4,"dato":"2017-03-02T00:00:00","beloep":-722.2,"beskrivelse":"Meny Oasen"},{"transaksjonsID":3,"kategoriID":7,"dato":"2017-03-03T00:00:00","beloep":-300.0,"beskrivelse":"Overføring mellom egne konto"},{"transaksjonsID":4,"kategoriID":8,"dato":"2017-03-04T00:00:00","beloep":-85.99,"beskrivelse":"McDonalds Oasen"},{"transaksjonsID":5,"kategoriID":6,"dato":"2017-03-05T00:00:00","beloep":-3082.0,"beskrivelse":"Fjordkraft"},{"transaksjonsID":6,"kategoriID":8,"dato":"2017-03-06T00:00:00","beloep":-438.37,"beskrivelse":"Egon Lagunen"},{"transaksjonsID":7,"kategoriID":6,"dato":"2017-03-06T00:00:00","beloep":-1984.0,"beskrivelse":"Canal Digital"},{"transaksjonsID":8,"kategoriID":6,"dato":"2017-03-08T00:00:00","beloep":-299.0,"beskrivelse":"Telenor"},{"transaksjonsID":9,"kategoriID":5,"dato":"2017-03-08T00:00:00","beloep":-2941.58,"beskrivelse":"Komplett.no"},{"transaksjonsID":10,"kategoriID":7,"dato":"2017-03-09T00:00:00","beloep":500.0,"beskrivelse":"Overføring mellom egne konto"},{"transaksjonsID":11,"kategoriID":4,"dato":"2017-03-10T00:00:00","beloep":-132.0,"beskrivelse":"Bunnpris Smiberget"},{"transaksjonsID":12,"kategoriID":9,"dato":"2017-03-10T00:00:00","beloep":-694.0,"beskrivelse":"Skyss"},{"transaksjonsID":13,"kategoriID":4,"dato":"2017-03-10T00:00:00","beloep":-342.0,"beskrivelse":"Coop Extra Bønes"},{"transaksjonsID":14,"kategoriID":6,"dato":"2017-03-12T00:00:00","beloep":-4553.0,"beskrivelse":"Lyshovden Brl"},{"transaksjonsID":15,"kategoriID":7,"dato":"2017-03-14T00:00:00","beloep":500.0,"beskrivelse":"Overføring mellom egne konto"},{"transaksjonsID":16,"kategoriID":5,"dato":"2017-03-16T00:00:00","beloep":-1135.62,"beskrivelse":"Elkjøp Fyllingsdalen"},{"transaksjonsID":17,"kategoriID":4,"dato":"2017-03-16T00:00:00","beloep":-746.12,"beskrivelse":"Meny Oasen"},{"transaksjonsID":18,"kategoriID":9,"dato":"2017-03-17T00:00:00","beloep":-492.42,"beskrivelse":"Bergen Taxi"}]}');
        console.log(data);
        ReactDOM.render( <h1>{data.kontonavn}</h1>, document.getElementById("kontonavn"));
        //ReactDOM.render( <p>Saldo: {data.saldo} </p>, document.getElementById("saldo"));
        console.log("hei");
        //ReactDOM.render( <Liste trans={data.transaksjoner}/>, document.getElementById("transTable"));

    }


    render() {
        this.getSaldo();
        return (
            <div className="container">
                <header>
                    <div id="kontonavn"> overskrift</div>

                    <div id="saldo"> 123</div>




                </header>

                <table id="transTable">
                </table>
            </div>
        );
    }
}

