import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import UserBlock from '../user-block/user-block.jsx';
import GuestBlock from '../guest-block/guest-block.jsx';
import {selectAuthorizationStatus} from '../../selectors/selectors.js';
import {authorizationStatusPropTypes} from '../../prop-types/user.js';
import {AuthStatus} from '../../const.js';


function HeaderWithAuthBlock({authorizationStatus, children, ...restProps}) {
  const isAuth = authorizationStatus === AuthStatus.AUTHORIZED;
  return (
    <Header {...restProps}>
      {
        [
          children,
          isAuth ? <UserBlock key={AuthStatus.AUTHORIZED}/> : <GuestBlock key={AuthStatus.NO_AUTHORIZED}/>,
        ]
      }
    </Header>
  );
}

HeaderWithAuthBlock.propTypes = {
  children: PropTypes.node,
  authorizationStatus: authorizationStatusPropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: selectAuthorizationStatus(state),
});

export default connect(mapStateToProps)(HeaderWithAuthBlock);
