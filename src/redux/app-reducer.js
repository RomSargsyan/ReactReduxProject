import { getAuth } from './auth-reducer';

const INITIATION_SUCCESS = "app/INITIATION-SUCCESS";

let initialState = {
  isInitiation: false
}

let appReducer = (state = initialState, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case INITIATION_SUCCESS: {
      stateCopy.isInitiation = true
      return stateCopy;
    }
    default: return stateCopy
  }
}

const initiatonSuccess = () => ({type: INITIATION_SUCCESS});

export const appInitiaton = () => (dispatch) => {
  let promise = dispatch(getAuth());
  promise.then(() => {
    dispatch(initiatonSuccess());
  })
}

export default appReducer;
