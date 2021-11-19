import { SERVICES } from '../../configs';
import axios from 'axios';
import * as actions from './actions';
import { call, put } from 'redux-saga/effects';

export function* requestTodo() {
  try {
    const { data } = yield call(axios, SERVICES.axiosOptions(
      { method: 'GET', url: SERVICES.TODOLIST }
    ));
    yield put(actions.successTodo({ data }));
  } catch (e) {
    yield put (actions.errorTodo(e));
  }
}
