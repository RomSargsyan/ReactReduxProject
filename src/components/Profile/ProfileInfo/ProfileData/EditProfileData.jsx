import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from './../../../Form/FormControl';
import style from './../../Profile.module.css';

const EditProfileData = ({profile, handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={style.itemProfile}>
        <Field type="text" component={Input} name="fullName" placeholder="Full name" />
      </div>
      <div className={style.itemProfile}>
        <Field type="text" component={Input} name="aboutMe" placeholder="About Me" />
      </div>
      <div className={style.itemProfile}>
        <Field type="checkbox" component={Input} name="lookingForAJob" />
        <strong>Looking for a job</strong>
      </div>
      <div className={style.itemProfile}>
        <Field type="text" component={Input} name="lookingForAJobDescription" placeholder="Looking for a job description" />
      </div>
      <div>
        <strong>Contacts</strong>:
        {
          Object.keys(profile.contacts).map(key => {
            return <div className={style.social} key={key}>
              <Field type="text" component={Input} name={'contacts.' + key} placeholder={key} />
            </div>
          })
        }
      </div>
      <div className={ error && style.formError}>
        { error }
      </div>
      <button>Save</button>
    </form>
  )
}

export default reduxForm({form: 'edit-profile'})(EditProfileData);
