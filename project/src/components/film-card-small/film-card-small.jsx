import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import VideoPlayer from '../videoplayer/video-player.jsx';
import {AppRoute} from '../../const.js';
import {filmPropertyTypes} from '../../prop-types/films.js';

function FilmCardSmall({id, title, previewImage, videoLink, hasVideo, onFilmCardMouseOver, onFilmCardMouseOut}) {
  const filmRoute = AppRoute.FILM.replace(':id', id);
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onFilmCardMouseOver(id)}
      onMouseOut={() => onFilmCardMouseOut()}
    >
      <div className="small-film-card__image">
        {
          hasVideo ?
            <VideoPlayer src={videoLink} poster={previewImage} autoplay/> :
            <img src={previewImage} alt={title} width="280" height="175"/>
        }
      </div>
      <h3 className="small-film-card__title">
        <Link to={filmRoute} className="small-film-card__link">{title}</Link>
      </h3>
    </article>
  );
}

FilmCardSmall.propTypes = {
  id: filmPropertyTypes.id.isRequired,
  title: filmPropertyTypes.title.isRequired,
  previewImage: filmPropertyTypes.previewImage.isRequired,
  videoLink: filmPropertyTypes.previewVideoLink.isRequired,
  hasVideo: PropTypes.bool,
  onFilmCardMouseOver: PropTypes.func.isRequired,
  onFilmCardMouseOut: PropTypes.func.isRequired,
};

export default React.memo(FilmCardSmall);
