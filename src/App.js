import React from 'react'
import { Switch, Route} from "react-router-dom"
import OrganizationsList from './containers/OrganizationsList'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        
        <Route exact path='/'>
          <>
            <header className="App-header">
              <h1>My Awesome Giving App</h1>
            </header>
            <OrganizationsList />
          </>
        </Route>
        <Route exact path='/organizations'>
          <h1>Organizations go here</h1>
        </Route>
        <Route exact path='/organizations/:id'>
          <h1>Why helloooo</h1>
        </Route>
        <Route exact path='/profile'>
          <h1>Profile Goes here</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
