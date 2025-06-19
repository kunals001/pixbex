// app/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import adminReducer from './slice/adminSlice';

const rootReducer = combineReducers({
  admin: adminReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
