import React from 'react';
import s from './FormControl.module.css';

export const Textarea = ({input, meta, ...props}) => {
  let hasBeenError = meta.touched && meta.error;
  return (
    <div className={`${hasBeenError ? s.error : ''}`}>
      <div>
        <textarea {...input} />
      </div>
       { hasBeenError && <span>{meta.error}</span> }
    </div>
  )
}

export const Input = ({input, meta, ...props}) => {
  let hasBeenError = meta.touched && meta.error;
  return (
    <div className={`${hasBeenError ? s.error : ''}`}>
      <div>
        <input {...input} {...props} />
      </div>
       { hasBeenError && <span>{meta.error}</span> }
    </div>
  )
}
