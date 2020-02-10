// import profileReducer from './profile-reducer';
// import dialogsReducer from './dialogs-reducer';
//
// const store = {
//   _state: {
//     dialogsPage: {
//       dialogs: [
//         { id: 1, name: 'Anna' },
//         { id: 2, name: 'Maria' },
//         { id: 3, name: 'Karina' },
//         { id: 4, name: 'Katya' },
//         { id: 5, name: 'Jenya' },
//       ],
//       message: [
//         { id: 1, message: 'Hi Anna' },
//         { id: 2, message: 'Hello Anna. I am Maria' },
//         { id: 3, message: 'Good by Karina' },
//       ],
//       newMessage: '',
//     },
//     profilePage: {
//       posts: [
//         {id: 1, message: "post1" },
//         {id: 2, message: "post2" },
//         {id: 3, message: "post3" },
//       ],
//       newTextPost: "ReactJs Post",
//     }
//   },
//
//   _callSubscrib () {
//     console.log('subscribe is not');
//   },
//
//   getState() {
//     return this._state;
//   },
//
//   subscrib(observer) {
//     this._callSubscrib = observer;
//   },
//
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._callSubscrib(this._state);
//   }
// }
//
// export default store;
