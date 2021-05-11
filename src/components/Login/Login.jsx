import React from 'react';
import style from "./Login.module.css"
import LoginForm from "./LoginForm/LoginForm";
import { reduxForm } from "redux-form";


const LoginReduxForm= reduxForm({
  
  form: 'login'
})(LoginForm)


const Login = (props) => {
  const onSubmit = (formData)=> {
  console.log(formData)
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

export default Login;