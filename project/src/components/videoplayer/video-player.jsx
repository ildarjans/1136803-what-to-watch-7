import React from 'react';
import PropTypes from 'prop-types';

function VideoPlayer({src, poster, autoplay}) {
  return (
    <video
      src={src}
      className="player__video"
      poster={poster}
      autoPlay={autoplay}
      muted={autoplay}
    />
  );
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  autoplay: PropTypes.bool.isRequired,
};

export default VideoPlayer;
