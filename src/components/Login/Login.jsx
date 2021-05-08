import React from 'react';
import CSS from "./Login.module.css"
const Login = (props) => {
  return (
    <h1 className={CSS.loginTitle}>
      Please login your account or register new.
    </h1>
  );
};

export default Login;