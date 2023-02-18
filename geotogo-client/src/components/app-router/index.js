import { Route, Routes } from 'react-router-dom';

import LandingPage from '../../pages/landing-page';
import HomePage from '../../pages/home';
import AfricaPage from '../../pages/africa';
import AsiaPage from '../../pages/asia';
import EuropePage from '../../pages/europe';
import NAPage from '../../pages/na';
import SAPage from '../../pages/sa';
import OceaniaPage from '../../pages/oceania';
import AfricaQPage from '../../pages/africa_quiz';
import React from 'react';

const PageSwitch = () => (
    <Routes>
        <Route index element={<HomePage />} />
        <Route exact path='/home' element={<HomePage />} />
        <Route exact path={'/africa'} element={<AfricaPage />} />
        <Route exact path={'/asia'} element={<AsiaPage />} />
        <Route exact path={'/europe'} element={<EuropePage />} />
        <Route exact path={'/na'} element={<NAPage />} />
        <Route exact path={'/sa'} element={<SAPage />} />
        <Route exact path={'/oceania'} element={<OceaniaPage />} />
        <Route exact path={'/africa_quiz'} element={<AfricaQPage />} />
        <Route exact path={'/landing'} element={<LandingPage />} />
    </Routes>
);

export default PageSwitch;