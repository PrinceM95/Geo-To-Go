import { Route, Routes } from 'react-router-dom';

import LandingPage from '../../pages/landing-page';
import HomePage from '../../pages/home';
import AfricaPage from '../../pages/africa';
import AsiaPage from '../../pages/asia';
import EuropePage from '../../pages/europe';
import NAPage from '../../pages/na';
import SAPage from '../../pages/sa';
import OceaniaPage from '../../pages/oceania';
import ContactPage from '../../pages/contact';
import React from 'react';

const PageSwitch = () => (
    <Routes>
        <Route index element={<HomePage />} />
        <Route exact path='/home' element={<HomePage />} />
        <Route exact path={'/africa'} element={<AfricaPage />} />
        <Route exact path={'/asia'} element={<AsiaPage />} />
        <Route exact path={'/europe'} element={<EuropePage />} />
        <Route exact path={'/north america'} element={<NAPage />} />
        <Route exact path={'/south america'} element={<SAPage />} />
        <Route exact path={'/oceania'} element={<OceaniaPage />} />
        <Route exact path={'/contact'} element={<ContactPage />} />
        <Route exact path={'/landing'} element={<LandingPage />} />
    </Routes>
);

export default PageSwitch;