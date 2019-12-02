import { APP_ACTIONS } from "./../constants";

const getInitialState = () => ({
  users: [
    {
      id: "9f15cdc6-a40d-4579-a125-432285a2fbfd",
      name: "Иван Петров",
      login: "ivan",
      email: "ivanpetrov@gmail.com",
      password: "123"
    },
    {
      id: "e566d47f-502f-4f2c-b1b6-2f19d5f372a3",
      name: "Маша Сидорова",
      login: "masha",
      email: "mashasidorova@gmail.com",
      password: "456"
    }
  ],
  currentUser: null
});

const initialState = getInitialState();

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
      const currentUser =
        state.users.find(
          user =>
            (user.login === login || user.email === login) &&
            user.password === password
        ) || null;
      return {
        ...state,
        currentUser
      };

    case APP_ACTIONS.SIGN_OUT:
      return { ...state, currentUser: null };

    default:
      return state;
  }
};

export default usersReducer;
