import React from "react";
import { Field, reduxForm } from "redux-form";

import { Input } from "./../Form/FormControl";
import style from "./../Form/FormControl.module.css";

const LoginForm = ({handleSubmit, captchaUrl, error}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field type="email" name="email" component={Input} placeholder="email" />
    </div>
    <div>
      <Field type="password" name="password" component={Input} placeholder="password"
      />
    </div>
    <div>
      <Field type="checkbox" component={Input} name="rememberMe" /> remember me
    </div>
    <div>
      {!!captchaUrl && (
        <div>
          <img src={captchaUrl} />
          <Field type="text" name="captcha" component={Input} placeholder="Please type image string" />
        </div>
      )}
    </div>
    <div className={error && style.formError}>{error}</div>
    <div>
      <button>login</button>
    </div>
  </form>
);

export default reduxForm({ form: "login" })(LoginForm);
