import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import toggleAuthReducer from './reducers/auth';


export const store = configureStore({
  reducer: {
    auth: toggleAuthReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;