import React from 'react';
import style from "./LoginForm.module.css"
import stylesForm from './../../common/FormsControls/FormsControls.module.css'
import { Field } from "redux-form";
import { createFiled, Input } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";

const MAX_LENGTH_10 = maxLengthCreator(10)

const LoginForm = ({handleSubmit,error}) => {
  return (
    <form className={style.logoForm} onSubmit={handleSubmit}>
      <div>
        {createFiled("Email","email",Input,[required])}
        {createFiled("Password","password",Input,[required],"password")}
        {createFiled(null,"rememberMe",Input,[],"checkbox", {} ,"remember me" )}
      </div>
      
      {error && <div className={stylesForm.formSummaryError}>
        {error}
      </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;