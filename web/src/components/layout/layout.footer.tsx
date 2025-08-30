import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/redux/store.ts';
import { useLocation, useNavigate } from 'react-router-dom';

const LayoutFooter: React.FC = () => {
  const battles = useSelector((state: RootState) => state.battlesReducers.battles);
  const location = useLocation();
  const navigate = useNavigate();

  const isPodiumPage = location.pathname === '/podium';

  const playedMatches = useMemo(() => {
    return `${battles.length ?? 0} match${battles.length > 0 ? 's' : ''} joué${battles.length > 0 ? 's' : ''}`;
  }, [battles]);

  const description = useMemo(() => {
    return isPodiumPage ? 'Revenir aux votes' : 'Voir le classement des chats';
  }, [isPodiumPage]);

  const handleClick = useCallback(() => {
    if (isPodiumPage) {
      navigate('/');
    } else {
      navigate('/podium');
    }
  }, [isPodiumPage, navigate]);

  return (
    <div className="layout-main-footer">
      <div className="layout-main-footer-content" onClick={handleClick}>
        <div className="layout-main-footer-content-item">
          <i className="fas fa-chevron-up" />
        </div>
        <div className="layout-main-footer-content-item">{description}</div>
        <div className="layout-main-footer-content-item bottom">
          <p>{playedMatches}</p>
        </div>
      </div>
    </div>
  );
};

export default LayoutFooter;
