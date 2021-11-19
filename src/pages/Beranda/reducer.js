import { ACTIONS } from '../../constants';

const initialState = {
  fetching: false,
  lists: null,
  error: null,
};

export default function reducer(state = initialState, action) {
  const { type, payload, error } = action;
  switch(type) {
    case ACTIONS.TODO_LIST_REQUEST:
      return {
        ...initialState,
        fetching:true
      };
    case ACTIONS.TODO_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        lists: payload
      };
    case ACTIONS.TODO_LIST_ERROR:
      return {
        ...state,
        fetching: false,
        error
      };
    default: return state;
  }
}
