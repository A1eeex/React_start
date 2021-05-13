import React from 'react';
import style from "./Login.module.css"
import LoginForm from "./LoginForm/LoginForm";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login, logout } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)


const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  if (props.isAuth) {
    return <Redirect to={'profile'}/>
  }
  return (
    <div>
      <h1 className={style.loginTitle}>
        Please login your account or register new.
      </h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);