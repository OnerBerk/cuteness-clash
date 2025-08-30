import React from 'react';

import {useAppDispatch} from '@/hooks/redux.hook';
import type {RootState} from '@/redux/store';
import {useSelector} from 'react-redux';

import {generateBattle} from '@/redux/actions/battles.actions';

import './home.scss';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentBattle = useSelector((state: RootState) => state.battlesReducers.currentBattle);

  if (!currentBattle) {
    dispatch(generateBattle());
  }
  return (
    <div className='home-main'>
      {/* <img src={currentBattle?.openentOne.url} alt='Openent One' />
      <img src={currentBattle?.openentTwo.url} alt='Openent Two' /> */}
    </div>
  );
};

export default HomePage;
