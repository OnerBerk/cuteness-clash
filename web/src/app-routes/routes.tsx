import { Route, Routes } from 'react-router-dom';

import HomePage from '@/pages/home/homePage.tsx';

import Layout from '@/components/layout/layout.tsx';
import PodiumPage from '@/pages/podium/podium-page';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/podium" element={<PodiumPage />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
