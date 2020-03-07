import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { routesByName } from 'constants/routes';
import HomePage from 'modules/pages/HomePage';
import Page404 from 'modules/pages/Page404';
// import UnderConstruction from 'modules/pages/UnderConstruction';
import AuthContainer from './modules/auth/components/AuthContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="container flex-grow-1 d-flex flex-column">
        <Switch>
          <Route exact path={routesByName.home} component={HomePage} />
          <Route exact path={routesByName.auth} component={AuthContainer} />
          <Route exact path="*" component={Page404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
