import { ACTIONS } from '../../constants';

export function requestTodo(payload) {
  return {
    type: ACTIONS.TODO_LIST_REQUEST,
    payload
  };
}

export function successTodo(payload) {
  return {
    type: ACTIONS.TODO_LIST_SUCCESS,
    payload
  };
}

export function errorTodo(error) {
  return {
    type: ACTIONS.TODO_LIST_ERROR,
    error
  };
}
