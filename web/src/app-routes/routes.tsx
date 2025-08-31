import { Route, Routes } from 'react-router-dom';

import HomePage from '@/pages/home/homePage.tsx';
import RankingPage from '@/pages/ranking/ranking-page';

import Layout from '@/components/layout/layout.tsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/ranking" element={<RankingPage />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
