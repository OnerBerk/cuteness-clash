import {createSlice} from '@reduxjs/toolkit';

const cachedBattles = localStorage.getItem('battles');

const parsedBattles = cachedBattles ? JSON.parse(cachedBattles) : [];

export interface PodcastState {
  isLoading: boolean;
  battles: [];
}

const initialState: PodcastState = {
  isLoading: false,
  battles: parsedBattles,
};

export const battlesSlice = createSlice({
  name: 'battlesReducers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = battlesSlice.actions;

export default battlesSlice.reducer;