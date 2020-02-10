import { getAuth } from "./auth-reducer";

const INITIATION_SUCCESS = "app/INITIATION-SUCCESS";

const initialState = {
  isInitiation: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIATION_SUCCESS: {
      return {...state, isInitiation: true };
    }
    default:
      return state;
  }
};

const initiatonSuccess = () => ({ type: INITIATION_SUCCESS });

export const appInitiaton = () => dispatch => {
  const promise = dispatch(getAuth());
  promise.then(() => {
    dispatch(initiatonSuccess());
  });
};

export default appReducer;
