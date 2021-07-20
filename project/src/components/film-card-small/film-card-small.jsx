import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';
import {AppRoute, OPEN_PREVIEW_DELAY} from '../../const.js';
import {filmPropTypes} from '../../prop-types/films.js';


function FilmCardSmall({id, title, image, videoSrc, hasVideo, onCardHover}) {
  const filmRoute = AppRoute.FILM.replace(':id', id);
  let delayTimer;

  const handleFilmCardMouseOver = () => {
    delayTimer = setTimeout(() => onCardHover(id), OPEN_PREVIEW_DELAY);
  };

  const handleFilmCardMouseOut = () => {
    clearTimeout(delayTimer);
    if (hasVideo) {
      onCardHover(null);
    }
  };

  useEffect(() => () => clearTimeout(delayTimer));

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => handleFilmCardMouseOver()}
      onMouseOut={() => handleFilmCardMouseOut()}
    >
      <div className="small-film-card__image">
        {
          hasVideo ?
            <VideoPlayer src={videoSrc} poster={image} autoplay/> :
            <img src={image} alt={title} width="280" height="175"/>
        }
      </div>
      <h3 className="small-film-card__title">
        <Link to={filmRoute} className="small-film-card__link">{title}</Link>
      </h3>
    </article>
  );
}

FilmCardSmall.propTypes = {
  id: filmPropTypes.id.isRequired,
  title: filmPropTypes.title.isRequired,
  image: filmPropTypes.previewImage.isRequired,
  videoSrc: filmPropTypes.previewVideoLink.isRequired,
  hasVideo: PropTypes.bool.isRequired,
  onCardHover: PropTypes.func.isRequired,
};

export default React.memo(FilmCardSmall);
