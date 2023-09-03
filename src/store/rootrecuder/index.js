import { combineReducers } from '@reduxjs/toolkit';
import publicationsReducer from '../publications/publication.slice';

const rootReducer = combineReducers({
  publications: publicationsReducer,
});

export default rootReducer;
