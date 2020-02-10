import React from "react";

import Item from "./Item/Item";
import Message from "./Message/Message";
import style from "./Dialogs.module.css";
import DialogsForm from "./../Form/DialogsForm";

const Dialogs = props => {
  const { dialogs, message, sendMessage } = props;

  const dialogsItemElements = dialogs.map(dialog => (
    <Item key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  const dialogsMessageElements = message.map((msg, index) => (
    <Message key={index} message={msg.message} />
  ));

  const onSendMessage = value => sendMessage(value.message);

  return (
    <div className={style.dialogsApp}>
      <div>{dialogsItemElements}</div>
      <div className={style.message}>
        <div>{dialogsMessageElements}</div>
        <DialogsForm onSubmit={onSendMessage} {...props} />
      </div>
    </div>
  );
};

export default Dialogs;
