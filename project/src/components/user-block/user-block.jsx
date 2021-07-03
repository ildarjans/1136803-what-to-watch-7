import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {selectUser} from '../../selectors/selectors.js';
import {logoutUser} from '../../middleware/thunk-api.js';
import {userPropTypes} from '../../prop-types/user.js';
import {AppRoute} from '../../const.js';

function UserBlock({user, onSignOut}) {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={user.avatarUrl} alt="User avatar" width="63" height="63"/>
        </div>
      </li>
      <li onClick={() => onSignOut()} className="user-block__item">
        <Link to={AppRoute.ROOT} className="user-block__link">Sign Out</Link>
      </li>
    </ul>
  );
}

UserBlock.propTypes = {
  user: userPropTypes.isRequired,
  onSignOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: selectUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSignOut () {
    dispatch(logoutUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
