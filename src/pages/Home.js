import React, {Component} from 'react';
import logo from "../logo.svg";
import '../App.css';

export class Home extends Component {

    constructor(props) {

        super(props);
        // reference to the DOM node

        this.state = {
            error: null,
        };

    }

    render() {

        return(
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </div>
        )

    }

}
