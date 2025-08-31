import React, { useCallback, useEffect, useMemo } from 'react';

import { useAppDispatch } from '@/hooks/redux.hook';

import { getRanking } from '@/redux/actions/battles.actions';
import type { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

import './ranking-page.scss';

import PodiumItem from './podium.item';
import type { BattleType } from '@/types/types';

const PodiumPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const ranking = useSelector((state: RootState) => state.battlesReducers.ranking);

  const initialFetch = useCallback(() => {
    dispatch(getRanking());
  }, [dispatch]);

  const { podium, otherRankings } = useMemo(() => {
    if (!ranking || ranking.length === 0) {
      return { podium: [], otherRankings: [] };
    }
    const podium = ranking.slice(0, 3).filter((item) => item && item.length > 0);
    const otherRankings = ranking.slice(3).filter((item) => item && item.length > 0);
    return { podium, otherRankings };
  }, [ranking]);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  if (ranking.length === 0) {
    return <div className="ranking-empty">Aucun classement disponible</div>;
  }

  return (
    <div className="ranking-main">
      <div className="ranking-main-podium">
        {podium[1] ? <PodiumItem cat={podium[1][0].winner} victories={podium[1].length} className="second" position={2} /> : <div />}
        {podium[0] ? <PodiumItem cat={podium[0][0].winner} victories={podium[0].length} className="first" position={1} /> : <div />}
        {podium[2] ? <PodiumItem cat={podium[2][0].winner} victories={podium[2].length} className="third" position={3} /> : <div />}
      </div>

      <div className="ranking-main-others">
        {otherRankings.length > 0 &&
          otherRankings.map((item: BattleType[], index: number) => (
            <PodiumItem key={index} cat={item[0].winner} victories={item.length} className="other" position={index + 4} />
          ))}
      </div>
    </div>
  );
};

export default PodiumPage;
