import React, {useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {selectFilmById} from '../../selectors/selectors.js';
import {AppRoute} from '../../const.js';


const TimeInSeconds = {
  HOUR: 3600,
  MINUTE: 60,
};

const padNumber = (num) => num < 10 ? `0${num}` : `${num}`;

const getElapsedTimeString = (currentTime, duration) => {
  const timeElapsed = duration - currentTime;
  const hours = padNumber(Math.floor(timeElapsed / TimeInSeconds.HOUR));
  const minutes = padNumber(Math.floor((timeElapsed - hours * TimeInSeconds.HOUR) / TimeInSeconds.MINUTE));
  const seconds = padNumber(Math.floor((timeElapsed - hours * TimeInSeconds.HOUR - minutes * TimeInSeconds.MINUTE)));
  return hours > 0 ? `-${hours}:${minutes}:${seconds}` : `-${minutes}:${seconds}`;
};

function Player() {
  const videoRef = useRef();
  const history = useHistory();
  const {id} = useParams();
  const film = useSelector((state) => selectFilmById(state, id));
  const [isPlaying, togglePlay] = useState(false);
  const [playingProgress, setPlayingProgress] = useState(0);

  const handlePlayButtonClick = () => !isPlaying ? videoRef.current.play() : videoRef.current.pause();
  const handleVideoFrameClick = handlePlayButtonClick;
  const handleVideoPlay = () => togglePlay(true);
  const handleVideoPause = () => togglePlay(false);
  const handleFullScreenButtonClick = () => videoRef.current.requestFullscreen();
  const handleExitButtonClick = () => history.push(AppRoute.FILM.replace(':id', id));
  const handleVideoTimeUpdate = () => {
    setPlayingProgress(videoRef.current.currentTime / videoRef.current.duration * 100);
  };

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={film.videoLink}
        className="player__video"
        poster={film.previewImage}
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
        onClick={handleVideoFrameClick}
        onTimeUpdate={handleVideoTimeUpdate}
      />

      <button onClick={handleExitButtonClick} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={playingProgress} max="100"/>
            <div className="player__toggler" style={{left: `${playingProgress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">
            {
              videoRef.current && getElapsedTimeString(videoRef.current.currentTime, videoRef.current.duration)
            }
          </div>
        </div>

        <div className="player__controls-row">
          {
            isPlaying &&
            <button onClick={handlePlayButtonClick} type="button" className="player__play">
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"/>
              </svg>
              <span>Pause</span>
            </button>
          }
          {
            !isPlaying &&
            <button onClick={handlePlayButtonClick} type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"/>
              </svg>
              <span>Play</span>
            </button>
          }


          <div className="player__name">{film.title}</div>

          <button onClick={handleFullScreenButtonClick} type="button" className="player__full-screen">
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

export default Player;
