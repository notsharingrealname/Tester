import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Settings from './Settings';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/settings" component={Settings} />
        {/* other routes */}
      </Switch>
    </BrowserRouter>
  );
import React from 'react';

function Settings() {
  return (
    <div>
      <h1>Settings</h1>
      {/* settings form or other content */}
    </div>
  );
}

  
}
