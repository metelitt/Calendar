import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { IUser } from '../../../models/IUser';

interface AuthState {
  auth: boolean;
  error: string;
  isLoading: boolean;
  user: IUser;
}

const initialState: AuthState = {
  auth: false,
  error: '',
  isLoading: false,
  user: {} as IUser,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setIsAuth, setIsLoading, setError } = authSlice.actions;

export const login = (username: string, password: string) => async (dispatch: (arg0: { payload: string | boolean | IUser; type: "auth/setUser" | "auth/setIsAuth" | "auth/setIsLoading" | "auth/setError"; }) => void) => {
  try {
    dispatch(setIsLoading(true));
    const response = await axios.get<IUser[]>('./users.json');
    const mockUser = response.data.find((user) => user.username === username && user.password === password);

    if (mockUser) {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('username', mockUser.username);
      dispatch(setIsAuth(true));
      dispatch(setUser(mockUser));
    } else {
      dispatch(setError('Некорректный логин или пароль'));
    }

    dispatch(setIsLoading(false));
  } catch (err) {
    dispatch(setError('Произошла ошибка при логине'));
  }
};

export const logout = ()=> async (dispatch: (arg0: { payload: boolean | IUser; type: "auth/setUser" | "auth/setIsAuth"; }) => void) => {
  try {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(setUser({} as IUser));
    dispatch(setIsAuth(false));
  } catch (err) {
    console.error('Произошла ошибка при логауте', err);
  }
};

export default authSlice.reducer;