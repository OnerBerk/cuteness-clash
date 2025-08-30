import {createSlice} from '@reduxjs/toolkit';
import type { BattleType, CatType } from '@/types/types';
import { generateBattle } from '../actions/battles.actions';
import catsData from '@/data/cats.json';

const cachedBattles = localStorage.getItem('battles');
const parsedBattles = cachedBattles ? JSON.parse(cachedBattles) : [];

const generateAllPossibleBattles = () => {
  const battles = [];
  for (let i = 0; i < catsData.images.length; i++) {
    for (let j = i + 1; j < catsData.images.length; j++) {
      battles.push({
        openentOne: catsData.images[i],
        openentTwo: catsData.images[j]
      });
    }
  }
  return battles;
};

const allPossibleBattles = generateAllPossibleBattles();


export interface BattlesState {
  isLoading: boolean;
  battles: BattleType[];
  currentBattle: BattleType | undefined;
  allPossibleBattles: BattleType[];
}
const initialState: BattlesState = {
  isLoading: false,
  battles: parsedBattles,
  currentBattle: undefined,
  allPossibleBattles: allPossibleBattles,
};

export const battlesSlice = createSlice({
  name: 'battlesReducers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(generateBattle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(generateBattle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentBattle = action.payload;
      })
      .addCase(generateBattle.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = battlesSlice.actions;

export default battlesSlice.reducer;