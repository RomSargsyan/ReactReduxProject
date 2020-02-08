import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store-redux';
import { Provider } from 'react-redux';

class AppContainer extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    )
  }
}

export default AppContainer;
