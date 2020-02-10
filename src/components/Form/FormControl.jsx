import React from 'react';
import style from './FormControl.module.css';

export const Textarea = ({input, meta}) => {
  const hasBeenError = meta.touched && meta.error;
  return (
    <div className={`${hasBeenError ? style.error : ''}`}>
      <div>
        <textarea {...input} />
      </div>
       { hasBeenError && <span>{meta.error}</span> }
    </div>
  )
}

export const Input = ({input, meta, ...props}) => {
  const hasBeenError = meta.touched && meta.error;
  return (
    <div className={`${hasBeenError ? style.error : ''}`}>
      <div>
        <input {...input} {...props} />
      </div>
       { hasBeenError && <span>{meta.error}</span> }
    </div>
  )
}
