import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './containers/App/Header';

import Home from './containers/App/Home';
import Atoms from './containers/App/Atoms';
import Molecules from './containers/App/Molecules';
import Organisms from './containers/App/Organisms';
import Templates from './containers/App/Templates';
import Pages from './containers/App/Pages';

const routes = (
  
  <div>
    
    <Header />
    <main className="u-padding">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/atoms" component={Atoms}/>
          <Route path="/molecules" component={Molecules}/>
          <Route path="/organisms" component={Organisms}/>
          <Route path="/templates" component={Templates}/>
          <Route path="/pages" component={Pages}/>
        </Switch>
      </HashRouter>
    </main>
  </div>
)

export default routes