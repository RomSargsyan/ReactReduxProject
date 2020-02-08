const SEND_MESSAGE = "dialogs/SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: 'Anna' },
    { id: 2, name: 'Maria' },
    { id: 3, name: 'Karina' },
    { id: 4, name: 'Katya' },
    { id: 5, name: 'Jenya' },
  ],
  message: [
    { id: 1, message: 'Hi Anna' },
    { id: 2, message: 'Hello Anna. I am Maria' },
    { id: 3, message: 'Good by Karina' },
  ],
}


let dialogsReducer = (state = initialState, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  if (action.type === SEND_MESSAGE) {
    let newMessage = {
      id: 4,
      message: action.message
    };

    stateCopy.message.push(newMessage)
  }

  return stateCopy;
};

const sendMessageAction = (message) => ({ type: SEND_MESSAGE, message });

export const sendMessage = (message) => (dispatch) => {
  dispatch(sendMessageAction(message))
}


export default dialogsReducer;
