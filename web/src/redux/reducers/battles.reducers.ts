import { createSlice } from '@reduxjs/toolkit';
import type { BattleType } from '@/types/types';
import { generateBattle, getRanking, voteForCutesCat } from '../actions/battles.actions';
import catsData from '@/data/cats.json';

const cachedBattles = localStorage.getItem('battles');
const parsedBattles = cachedBattles ? JSON.parse(cachedBattles) : [];

const generateAllPossibleBattles = () => {
  const battles = [];
  for (let i = 0; i < catsData.images.length; i++) {
    for (let j = i + 1; j < catsData.images.length; j++) {
      battles.push({
        openentOne: catsData.images[i],
        openentTwo: catsData.images[j],
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
  ranking: BattleType[][];
}
const initialState: BattlesState = {
  isLoading: false,
  battles: parsedBattles,
  currentBattle: undefined,
  allPossibleBattles: allPossibleBattles,
  ranking: [],
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

    builder
      .addCase(voteForCutesCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(voteForCutesCat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.battles = [...state.battles, action.payload];
      });

    builder
      .addCase(getRanking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRanking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ranking = action.payload;
      });
  },
});

export const { reducer: battlesReducer } = battlesSlice;

export default battlesReducer;
