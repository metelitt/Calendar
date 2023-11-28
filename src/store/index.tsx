import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import auth from './reducers/auth';


export const store = configureStore({
  reducer: {
    auth,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;