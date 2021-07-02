import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import MainPage from '../main-page/main-page.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import MyList from '../my-list/my-list.jsx';
import UserPage from '../user-page/user-page.jsx';
import Player from '../player/player.jsx';
import Review from '../review/review.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import {AppRoute} from '../../const.js';
import {browserHistory} from '../../browser-history.js';
import PrivateRoute from '../private-route/private-route.jsx';
import LoginRoute from '../login-route/login-route.jsx';

function App() {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT} component={MainPage}/>
        <LoginRoute isExact path={AppRoute.LOGIN} render={() => <UserPage/>}/>
        <Route exact path={AppRoute.FILM} component={MoviePage}/>
        <Route exact path={AppRoute.PLAYER} component={Player}/>
        <PrivateRoute isExact path={AppRoute.REVIEW} render={({match}) => <Review id={match.params.id}/>}/>
        <PrivateRoute isExact path={AppRoute.FAVORITES} render={() => <MyList/>}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}

export default App;
