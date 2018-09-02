import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Atoms from './Atoms';
import Molecules from './Molecules';
import Organisms from './Organisms';
import Templates from './Templates';
import Pages from './Pages';

const Main = () => (
  <div className="u-padding">
    <main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/atoms" component={Atoms}/>
        <Route path="/molecules" component={Molecules}/>
        <Route path="/organisms" component={Organisms}/>
        <Route path="/templates" component={Templates}/>
        <Route path="/pages" component={Pages}/>
      </Switch>
    </main>
  </div>
);

export default Main;