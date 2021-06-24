import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import MainPage from '../main-page/main-page.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import MyList from '../my-list/my-list.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Player from '../player/player.jsx';
import Review from '../review/review.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import {AppRoute} from '../../const.js';
import {browserHistory} from '../../browser-history.js';

function App() {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT} component={MainPage}/>
        <Route exact path={AppRoute.LOGIN} component={SignIn}/>
        <Route exact path={AppRoute.FAVORITES} component={MyList}/>
        <Route exact path={AppRoute.FILM} render={({match}) => <MoviePage id={match.params.id}/>}/>
        <Route exact path={AppRoute.REVIEW} render={({match}) => <Review id={match.params.id}/>}/>
        <Route exact path={AppRoute.PLAYER} render={({match}) => <Player id={match.params.id}/>}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}

export default App;
