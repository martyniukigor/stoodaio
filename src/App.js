import React from 'react';
import {Route, Switch} from 'react-router-dom'

//Components
import {Pravi} from "./component/Pravi";

//Pages & Blocks
import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import {Profile} from "./pages/Profile";

function App() {
  return (
      <Route render={({location}) => (

          <main>

            <Pravi />

                <Switch location={location}>

                  <Route path='/' exact component={Home} />

                  <Route path='/login' component={Login} />

                  <Route path='/profile' component={Profile} />

                </Switch>

          </main>

      )} />
  );
}

export default App;
