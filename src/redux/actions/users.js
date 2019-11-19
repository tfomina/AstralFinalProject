import { APP_ACTIONS } from "./../constants";

const signUpAction = payload => ({
  type: APP_ACTIONS.SIGN_UP,
  payload
});

const signInAction = payload => ({
  type: APP_ACTIONS.SIGN_IN,
  payload
});

const signOutAction = () => ({
  type: APP_ACTIONS.SIGN_OUT
});

export { signUpAction, signInAction, signOutAction };
