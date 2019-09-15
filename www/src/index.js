import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import SignUp2 from './routes/SignUp2';
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/app" component={App} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signup2" exact component={SignUp2} />
      </div>
    </Router>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
