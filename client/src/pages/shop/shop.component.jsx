import React, { useEffect,lazy,Suspense } from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import Spinner from '../../components/spinner/spinner.component.jsx';
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const CollectionsOverviewContainer = lazy(() => import('../../components/collections/collections-overview.container'));
const CollectionsPageContainer = lazy(() => import('../../pages/collection/collection.container'))

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionsPageContainer}
      />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
