import React from 'react';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import Catalog from '../catalog/catalog.jsx';
import UserBlock from '../user-block/user-block.jsx';
import {getCardKeys} from '../../mock-utils.js';
import {AMOUNT_MY_LIST_CARD, CatalogTitle, HeaderClass} from '../../consts.js';

const keyList = getCardKeys(AMOUNT_MY_LIST_CARD);

function MyList() {
  return (
    <div className="user-page">
      <Header specialClass={HeaderClass.USER_PAGE}>
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock/>
      </Header>

      <Catalog title={CatalogTitle.MORE_LIKE_THIS} films={keyList}/>

      <Footer/>
    </div>
  );
}

export default MyList;
