import { takeEvery, all } from 'redux-saga/effects';
import { ACTIONS } from '../constants';
import {
  requestTodo,
} from '../pages/Beranda/sagas';


function* sagaKu() {
  yield all([
    takeEvery(ACTIONS.TODO_LIST_REQUEST, requestTodo),
  ]);
}

export default sagaKu;
