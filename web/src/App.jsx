import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { routesByName } from 'constants/routes';
import HomePage from 'modules/pages/HomePage';
import Page404 from 'modules/pages/Page404';
// import UnderConstruction from 'modules/pages/UnderConstruction';
import LoginContainer from './modules/auth/login/LoginContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="container flex-grow-1 d-flex flex-column">
        <Switch>
          <Route exact path={routesByName.home} component={HomePage} />
          <Route exact path={routesByName.login} component={LoginContainer} />
          <Route exact path="*" component={Page404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
