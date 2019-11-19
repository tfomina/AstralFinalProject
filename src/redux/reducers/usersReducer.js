import { APP_ACTIONS } from "./../constants";

const initialState = {
  users: [
    {
      id: "9f15cdc6-a40d-4579-a125-432285a2fbfd",
      name: "test",
      login: "test",
      email: "test@gmail.com",
      password: "123"
    }
  ],
  currentUser: null
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_ACTIONS.SIGN_UP:
      state = {
        users: [...state.users, action.payload],
        currentUser: action.payload
      };
      return state;

    case APP_ACTIONS.SIGN_IN:
      const { login, password } = action.payload;
      return {
        ...state,
        currentUser:
          state.users.find(
            user =>
              (user.login === login || user.email === login) &&
              user.password === password
          ) || null
      };

    case APP_ACTIONS.SIGN_OUT:
      return { ...state, currentUser: null };

    default:
      return state;
  }
};

export default usersReducer;
