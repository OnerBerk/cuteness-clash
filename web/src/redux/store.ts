import { configureStore } from '@reduxjs/toolkit';
import battlesReducers from './reducers/battle.reducers'

export const store = configureStore({
  reducer: {
    battles: battlesReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch