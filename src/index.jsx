import React from 'react';
import ReactDOM from 'react-dom';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import carsReducer from './reducers/cars_reducer';
import CarsList from './containers/cars_list';
import CarNew from './containers/car_new';
import CarShow from './containers/car_show';


import '../assets/stylesheets/application.scss';

// const garageName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
const garageName = 'charles';
const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={CarsList} />
        <Route path="/cars/new" exact component={CarNew} />
        <Route path="/cars/:id" exact component={CarShow} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
