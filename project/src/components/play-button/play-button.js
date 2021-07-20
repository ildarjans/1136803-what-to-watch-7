import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../const.js';

function PlayButton({id}) {
  const history = useHistory();
  const handleButtonClick = () => history.push(AppRoute.PLAYER.replace(':id', id));
  return (
    <button onClick={handleButtonClick} className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"/>
      </svg>
      <span>Play</span>
    </button>
  );
}

PlayButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PlayButton;
