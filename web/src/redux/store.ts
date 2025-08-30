import { configureStore } from '@reduxjs/toolkit';
import battlesReducers from './reducers/battles.reducers'

export const store = configureStore({
  reducer: {
    battlesReducers: battlesReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch