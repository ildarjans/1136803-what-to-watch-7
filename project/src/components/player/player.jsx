import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import VideoPlayer from '../videoplayer/video-player.jsx';
import {filmPropTypes} from '../../prop-types/films.js';
import {selectFilmById, selectFilmIdFromRoute} from '../../selectors/selectors.js';

function Player({film}) {
  return (
    <div className="player">
      <VideoPlayer
        src={film.videoLink}
        poster={film.previewImage}
        autoplay={false}
      />

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"/>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"/>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.title}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

Player.propTypes = {
  film: filmPropTypes.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  film: selectFilmById(state, selectFilmIdFromRoute(ownProps)),
});

export default connect(mapStateToProps)(withRouter(Player));
