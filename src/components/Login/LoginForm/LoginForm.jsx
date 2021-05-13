import React from 'react';
import style from "./LoginForm.module.css"
import { Field } from "redux-form";
import { Input } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
const MAX_LENGTH_10 = maxLengthCreator(10)

const LoginForm = (props) => {
  return (
    <form className={style.logoForm} onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Email'}
               name="email"
               component={Input}
               validate={[required]}
        />
      </div>
      
      <div>
        <Field placeholder={'Password'}
               name="password"
               component={Input}
               validate={[required]}
               type="password"
        />
      
      </div>
      <div>
        <Field type={'checkbox'} name="rememberMe"                component={Input}
        /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;