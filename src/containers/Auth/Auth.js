import React, { useState } from "react";
import { connect } from 'react-redux';
// import classes from "./Layout.module.css"
import classes from './Auth.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/action/index';

const Auth = React.memo(props => {
    const [credentials, setCredentials] = useState("");

    const onChange = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        // props.onLogin(credentials.email, credentials.password);
        props.onAuth(credentials.username, credentials.password);
    };

    let errorMessage = "";

    errorMessage = (
        <p style={{ color: 'red' }}>Incorrect Password Or Username</p>
    );

    return (
        <>

            <div className={classes.bgImg}>
                <div className={classes.loginBox}>
                    <h1>Login</h1>
                    {props.touch && !props.token && !props.loading && errorMessage}
                    {props.loading ? (
                        <Spinner />
                    ) : (
                            <form noValidate onSubmit={onSubmit}>
                                <div className={classes.textbox}>
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                    <input type="text" placeholder="Username"
                                        name="username"
                                        value={credentials.username}
                                        onChange={onChange} />
                                </div>

                                <div className={classes.textbox}>
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                    <input type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={credentials.password}
                                        onChange={onChange}
                                    />
                                </div>

                                <button type="submit" className={classes.btn}>Login</button>
                            </form>
                        )}

                </div>
            </div>
        </>
    );

})


const mapStateToProps = state => ({
    userToken: state.auth.token,
    touch: state.auth.touch,
    loading: state.auth.loading,

});


const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);