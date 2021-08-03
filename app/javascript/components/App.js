import React from 'react'
import Airlines from './Airlines/Airlines'
import Airline from './Airline/Airline'
import { Route, Switch } from 'react-router-dom'


const App = () => {
  return ( 
    <Switch>
      <Route exact path = "/" componet={Airlines} />
      <Route exact path="/:slug" component={Airline} />

    </Switch>
    );
}
 
export default App;