import React from "react";
import { Field, reduxForm } from "redux-form";

import { Textarea } from "./FormControl";
import { required, maxLength } from "./Validation/validation";

const maxLength20 = maxLength(20);

const DialogsForm = ({ handleSubmit, newMessage}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        type="text"
        name="message"
        value={newMessage}
        component={Textarea}
        validate={[required, maxLength20]}
      />
    </div>
    <button>Send</button>
  </form>
);

export default reduxForm({
  // a unique name for the form
  form: "newMessage"
})(DialogsForm);
