import React from 'react';
import style from "./LoginForm.module.css"
import { Field } from "redux-form";

const LoginForm = (props) => {
  return (
    <form className={style.logoForm} onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'} name="Login" component="input" />
      </div>
      
      <div>
        <Field placeholder={'Password'} name="Password" component="input" type="text" />
      
      </div>
      <div>
        <Field type={'checkbox'} name="rememberMe" component="input" /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;