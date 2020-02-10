import React from 'react';
import { Field, reduxForm  } from 'redux-form';

import { Textarea } from './FormControl';
import { required, maxLength } from './Validation/validation';

const maxLength15 = maxLength(15);
const ProfilePostForm = ({handleSubmit, newTextPost}) => {
  return (
    <form onSubmit={handleSubmit}>
        <div>
          <Field
            type="text"
            name="newTextPost"
            value={newTextPost}
            component={Textarea}
            validate={[required, maxLength15]}
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
