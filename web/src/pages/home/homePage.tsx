import React, { useCallback, useEffect } from 'react';
import type { CatType } from '@/types/types';

import { generateBattle, voteForCutesCat } from '@/redux/actions/battles.actions';
import { useAppDispatch } from '@/hooks/redux.hook';
import type { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

import OpenentsBlock from './openents-block';
import './home.scss';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentBattle = useSelector((state: RootState) => state.battlesReducers.currentBattle);

  const handleVoteForBattle = useCallback(
    (winner: CatType) => {
      if (currentBattle) {
        dispatch(voteForCutesCat({ ...currentBattle, winner }));
      }
    },
    [currentBattle, dispatch],
  );

  useEffect(() => {
    if (!currentBattle) {
      dispatch(generateBattle());
    }
  }, [currentBattle, dispatch]);

  if (!currentBattle) {
    return <div className="home-loading">Chargement des chats...</div>;
  }

  return (
    <div className="home-main">
      <OpenentsBlock url={currentBattle?.openentOne.url} handleVoteForBattle={() => handleVoteForBattle(currentBattle.openentOne)} />
      <div className="home-main-divider-container">
        <span className="home-main-divider"></span>
      </div>
      <OpenentsBlock url={currentBattle?.openentTwo.url} handleVoteForBattle={() => handleVoteForBattle(currentBattle.openentTwo)} />
    </div>
  );
};

export default HomePage;
