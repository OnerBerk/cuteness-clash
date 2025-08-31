import type { CatType } from '@/types/types';
import React, { useMemo } from 'react';

interface Props {
  cat: CatType | undefined;
  victories: number;
  className: string;
  position: number;
}

{
  /**
   * Potentiellement beaucoup de cartes avec ce calcul de points, cela permettra de ne pas refaire le calcul sur les cartes qui n'ont pas de nouvelles victoires
   */
}
const VictoriesToPoints: React.FC<{ victories: number }> = ({ victories }) => {
  const point = useMemo(() => {
    return victories * 100;
  }, [victories]);
  return <span className="victories">{point} points</span>;
};

const PodiumItem: React.FC<Props> = ({ cat, victories, className, position }) => {
  return (
    <div className={`podium-item ${className}`}>
      <span className="position">{position}</span>
      <div className="podium-item-image">
        <img src={cat?.url} alt={cat?.id} />
      </div>
      <div className="podium-item-info">
        <span className="label">{cat?.id}</span>
        <VictoriesToPoints victories={victories} />
      </div>
    </div>
  );
};

export default PodiumItem;
