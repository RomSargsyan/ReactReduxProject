import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from './../Form/FormControl';
import style from './../Form/FormControl.module.css';

class LoginForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <Field
            type="email"
            component={Input}
            name="email"
            placeholder="email"
          />
        </div>
        <div>
          <Field
            type="password"
            component={Input}
            name="password"
            placeholder="password"
          />
        </div>
        <div>
          <Field type="checkbox" component={Input} name="rememberMe" /> remember me
        </div>
        <div>
        {
          !!this.props.captchaUrl && <div>
            <img src={this.props.captchaUrl} />
            <Field type="text" component={Input} placeholder="Please type image string" name="captcha" />
          </div>
        }
        </div>
        <div className={ this.props.error && style.formError}>
          { this.props.error }
        </div>
        <div>
          <button>login</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({ form: 'login' })(LoginForm);
