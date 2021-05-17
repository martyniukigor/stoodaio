import React, {Component} from 'react';
import '../App.css';

export class Profile extends Component {

    constructor(props) {

        super(props);
        // reference to the DOM node

        this.state = {
            error: null,
        };

    }

    componentDidMount() {

        let logged = sessionStorage.getItem('logged');

        if(logged != true){

            this.props.history.push("/login")

        }

    }

    render() {

        const { page } = this.state;

        return(
            <div className="App-header">
                <p>
                    Greetings! It`s your profile here :)
                </p>
            </div>
        )

    }

}
