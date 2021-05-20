import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { userRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <h1>Welcome back!</h1>
      <Switch>
        {userRoutes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={routeProps => {
                return <route.component {...routeProps} />;
              }}
            />
          );
        })}
        <Redirect to={userRoutes[0].path} from='/users'/>
        <Redirect to='/404' />
      </Switch>
    </div>
  );
}

export default App;
