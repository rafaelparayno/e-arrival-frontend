import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from '../../../containers/Auth/Auth';
import * as actions from '../../../store/action/index';


const Logout = React.memo(props => {

    useEffect(() => {
        props.onLogout();
    }, [])

    return (
        <Redirect to='/login' component={Auth} />
    );

})

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

export default connect(null, mapDispatchToProps)(Logout);