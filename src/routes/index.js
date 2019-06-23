import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from 'views/pages/home';
import NasaSearchPage from 'views/pages/nasa-search';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/nasa-search" component={NasaSearchPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
