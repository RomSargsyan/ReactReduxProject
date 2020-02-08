import React from 'react';
import { Field, reduxForm  } from 'redux-form';
import { Textarea } from './FormControl';
import { required, maxLength } from './Validation/validation';

let maxLength15 = maxLength(15);
const ProfilePostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            type="text"
            component={Textarea}
            name="newTextPost"
            validate={[required, maxLength15]}
            value={props.newTextPost}
          />
        </div>
        <button>Add Post</button>
    </form>
  )
}

export default reduxForm({
  // a unique name for the form
  form: 'newTextPost'
})(ProfilePostForm);
