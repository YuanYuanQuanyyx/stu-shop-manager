import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { mainRoutes } from './routes';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/users' render={routeProps =><App {...routeProps} />} />
      {mainRoutes.map(route => {
        return <Route key={route.path} {...route} />;
      })}
      <Redirect to='/login' from='/' />
      <Redirect to='/404'/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
