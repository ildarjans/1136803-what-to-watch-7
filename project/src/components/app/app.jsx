import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainPage from '../main-page/main-page.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import MyList from '../my-list/my-list.jsx';
import UserPage from '../user-page/user-page.jsx';
import Player from '../player/player.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import AddReviewPage from '../add-review-page/add-review-page.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import {AppRoute} from '../../const.js';

function App() {
  return (
    <Switch>
      <Route exact path={AppRoute.ROOT} component={MainPage}/>
      <Route exact path={AppRoute.LOGIN} component={UserPage}/>
      <Route exact path={AppRoute.FILM} component={MoviePage}/>
      <Route exact path={AppRoute.PLAYER} component={Player}/>
      <PrivateRoute exact path={AppRoute.REVIEW} render={() => <AddReviewPage/>}/>
      <PrivateRoute exact path={AppRoute.FAVORITES} render={() => <MyList/>}/>
      <Route component={NotFoundPage}/>
    </Switch>
  );
}

export default App;
