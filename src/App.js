import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import * as actions from './store/action/index';

const App = React.memo(props => {

  useEffect(() => {
    props.onTryAutoSignup();
  }, [])


  let routes = "";
  if (props.userToken) {
    routes = (
      <>
        <Route path={["/"]} component={Layout} />
      </>
    )
  } else {
    routes = (
      <>
        <Route path={["/login"]} component={Auth} />
        <Redirect to='/login' component={Auth} />
      </>
    );
  }

  return (
    <div>
      <Router>
        {routes}
      </Router>
    </div>
  )

})

const mapStateToProps = state => ({
  userToken: state.auth.token,
});


const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
