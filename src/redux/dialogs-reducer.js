const SEND_MESSAGE = "dialogs/SEND-MESSAGE";

const initialState = {
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


const dialogsReducer = (state = initialState, action) => {
	const stateCopy = JSON.parse(JSON.stringify(state));
	if (action.type === SEND_MESSAGE) {
		const newMessage = {
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
