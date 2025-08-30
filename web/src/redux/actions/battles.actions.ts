import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from '../store';

export const generateBattle = createAsyncThunk(
  'battles/generateBattle',
  async (_, { getState }) => {
    const state = getState() as RootState;
    const existingBattles = state.battlesReducers.battles;
    const allPossibleBattles = state.battlesReducers.allPossibleBattles;
    
    const availableBattles = allPossibleBattles.filter((possibleBattle: any) => {
      return !existingBattles.some((existingBattle: any) => 
        (existingBattle.openentOne.id === possibleBattle.openentOne.id && 
         existingBattle.openentTwo.id === possibleBattle.openentTwo.id) ||
        (existingBattle.openentOne.id === possibleBattle.openentTwo.id && 
         existingBattle.openentTwo.id === possibleBattle.openentOne.id)
      );
    });
      const randomIndex = Math.floor(Math.random() * availableBattles.length);
      return availableBattles[randomIndex];
  }
);