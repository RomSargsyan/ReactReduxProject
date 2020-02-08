import React from 'react';
import { Field, reduxForm  } from 'redux-form';
import { Textarea } from './FormControl';
import { required, maxLength } from './Validation/validation';

let maxLength20 = maxLength(20)
const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            type="text"
            component={Textarea}
            name="message"
            validate={[required, maxLength20]}
            value={props.newMessage}
          />
        </div>
        <button>Send</button>
    </form>
  )
}

export default reduxForm({
  // a unique name for the form
  form: 'newMessage',
})(DialogsForm);
