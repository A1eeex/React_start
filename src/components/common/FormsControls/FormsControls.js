import React from 'react'
import style from './FormsControls.module.css'
import { Field } from "redux-form";

export const FormControl = ({input, meta:{touched,error}, children}) => {
  const hasError = touched && error;
  return (
    <div className={style.formControl + ' ' + (hasError ? style.error : "")}>
      <div>
        {children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return (
    <FormControl {...props} > <textarea {...input} {...restProps}/></FormControl>
  )
}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return (
    <FormControl {...props} > <input {...input} {...restProps}/></FormControl>
  )
}
export const createFiled =(placeholder,name,component,validate,type, props={}, text="")=> (
  <div>
  <Field placeholder={placeholder}
         name={name}
         component={component}
         validate={validate}
         type={type}
         {...props}
  />{text}
  </div>
)