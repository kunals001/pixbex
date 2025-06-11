import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './slice/adminSlice';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
  admin: adminReducer,
});


const persistConfig = {
  key: "root",
  storage,
  whitelist: ['admin'],
};


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});


export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
