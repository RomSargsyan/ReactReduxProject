import React from 'react';
import style from './Dialogs.module.css';
import Item from './Item/Item';
import Message from './Message/Message';
import DialogsForm from './../Form/DialogsForm';

const Dialogs = (props) => {
  let dialogsItemElements = props.dialogs.map((dialog) => {
      return <Item key={dialog.id} name={dialog.name} id={dialog.id} />
    });

  let dialogsMessageElements = props.message.map((msg, index) => {
      return <Message key={index} message={msg.message} />
    });

  let sendMessage = (value) => {
    props.sendMessage(value.message);
  };

  return (
    <div className={style.dialogsApp}>
      <div>
        { dialogsItemElements }
      </div>
      <div className={style.message}>
        <div>
          { dialogsMessageElements }
        </div>
        <DialogsForm onSubmit={sendMessage} {...props} />
      </div>
    </div>
  )
}

export default Dialogs;
