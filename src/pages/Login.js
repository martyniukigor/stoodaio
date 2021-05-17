import React, {Component} from 'react';
import OAuth2Login from 'react-simple-oauth2-login';
import '../App.css';

export class Login extends Component {

    constructor(props) {

        super(props);
        // reference to the DOM node

        this.state = {
            error: null,
        };

        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);

    }

    onSuccess (){

        sessionStorage.setItem('logged', true)

        this.props.history.push("/profile")

    }

    onFailure (){
        alert('Try again, friend!')
    }

    render() {

        return(
            <div className="App-header">
                <form onSubmit={this.letMeIn}>
                    <div>
                        <OAuth2Login
                            authorizationUrl="https://accounts.spotify.com/authorize"
                            responseType="token"
                            clientId="9822046hvr4lnhi7g07grihpefahy5jb"
                            redirectUri="http://localhost:3000/profile"
                            onSuccess={this.onSuccess}
                            onFailure={this.onFailure}/>
                    </div>
                </form>

            </div>
        )

    }

}
