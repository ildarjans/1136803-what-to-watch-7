import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../main-page/main-page.jsx';
import MyList from '../my-list/my-list.jsx';
import FilmCard from '../film-card/film-card.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Player from '../player/player.jsx';
import Review from '../review/review.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import {AppRoute} from '../../consts.js';

function App({title, genre, year}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT} render={() => <MainPage title={title} genre={genre} year={year}/>}/>
        <Route exact path={AppRoute.LOGIN} component={SignIn}/>
        <Route exact path={AppRoute.FAVORITES} component={MyList}/>
        <Route exact path={AppRoute.FILM} render={() => <FilmCard title={title} genre={genre} year={year}/>}/>
        <Route exact path={AppRoute.REVIEW} component={Review}/>
        <Route exact path={AppRoute.PLAYER} component={Player}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default App;
