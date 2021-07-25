import React from 'react';
import {filmPropTypes} from '../../prop-types/films.js';
import {useDispatch} from 'react-redux';
import {addToFavorites} from '../../middleware/thunk-api.js';

const FavoriteStatus = {
  ADD: 1,
  REMOVE: 0,
};

function MyListButton({id, isFavorite}) {
  const dispatch = useDispatch();
  const handleButtonClick = () => dispatch(addToFavorites(id, isFavorite ? FavoriteStatus.REMOVE : FavoriteStatus.ADD));
  return (
    <button onClick={handleButtonClick} className="btn btn--list film-card__button" type="button">

      {
        isFavorite ?
          <svg viewBox="0 0 19 20" width="18" height="14" data-testid={'in-list'}>
            <use xlinkHref="#in-list"/>
          </svg> :
          <svg viewBox="0 0 19 20" width="19" height="20" data-testid={'add-to-list'}>
            <use xlinkHref="#add"/>
          </svg>
      }

      <span>My list</span>
    </button>
  );
}

MyListButton.propTypes = {
  id: filmPropTypes.id.isRequired,
  isFavorite: filmPropTypes.isFavorite.isRequired,
};

export default MyListButton;
