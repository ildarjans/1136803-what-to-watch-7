import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import VideoPlayer from '../videoplayer/video-player.jsx';
import {AppRoute, OPEN_PREVIEW_DELAY} from '../../const.js';
import {filmPropertyTypes} from '../../prop-types/films.js';


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
  id: filmPropertyTypes.id.isRequired,
  title: filmPropertyTypes.title.isRequired,
  image: filmPropertyTypes.previewImage.isRequired,
  videoSrc: filmPropertyTypes.previewVideoLink.isRequired,
  hasVideo: PropTypes.bool,
  onCardHover: PropTypes.func.isRequired,
};

export default React.memo(FilmCardSmall);
