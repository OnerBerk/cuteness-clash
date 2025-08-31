import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { BattleType } from '@/types/types';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';

export const generateBattle = createAsyncThunk('battles/generateBattle', async (_, { getState }) => {
  const state = getState() as RootState;
  const existingBattles = state.battlesReducers.battles;
  const allPossibleBattles = state.battlesReducers.allPossibleBattles;

  const availableBattles = allPossibleBattles.filter((possibleBattle: BattleType) => {
    return !existingBattles.some(
      (existingBattle: BattleType) =>
        (existingBattle.openentOne.id === possibleBattle.openentOne.id && existingBattle.openentTwo.id === possibleBattle.openentTwo.id) ||
        (existingBattle.openentOne.id === possibleBattle.openentTwo.id && existingBattle.openentTwo.id === possibleBattle.openentOne.id),
    );
  });
  const randomIndex = Math.floor(Math.random() * availableBattles.length);
  return availableBattles[randomIndex];
});

export const voteForCutesCat = createAsyncThunk('battles/voteForCutesCat', async (battleWithWinner: BattleType, { getState, dispatch }) => {
  const state = getState() as RootState;
  localStorage.setItem('battles', JSON.stringify([...state.battlesReducers.battles, battleWithWinner]));
  dispatch(generateBattle());
  return battleWithWinner;
});

export const getRanking = createAsyncThunk('battles/getRanking', async (_, { getState }) => {
  const state = getState() as RootState;
  const battles = state.battlesReducers.battles;
  const ranking = groupBy(battles, 'winner.id');
  const orderedRanking = orderBy(ranking, (value) => value.length, 'desc');
  return orderedRanking;
});
