import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import beranda from '../pages/Beranda/reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  beranda
});

export default rootReducer;
