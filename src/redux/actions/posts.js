import { APP_ACTIONS } from "./../constants";

const addCommentAction = payload => ({
  type: APP_ACTIONS.ADD_COMMENT,
  payload
});

const deleteCommentAction = payload => ({
  type: APP_ACTIONS.DELETE_COMMENT,
  payload
});

const toggleLikeAction = payload => ({
  type: APP_ACTIONS.TOGGLE_LIKE,
  payload
});

export { addCommentAction, deleteCommentAction, toggleLikeAction };
