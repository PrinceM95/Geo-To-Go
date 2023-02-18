import { Route, Routes } from 'react-router-dom';

import AboutPage from '../../pages/about';
import AfricaPage from '../../pages/africa';
import AsiaPage from '../../pages/asia';
import ContactPage from '../../pages/contact';
import EuropePage from '../../pages/europe';
// import LandingPage from '../../pages/landing';
import HomePage from '../../pages/home';
import NAPage from '../../pages/na';
import OceaniaPage from '../../pages/oceania';
import AfricaQPage from '../../pages/africa_quiz';
import React from 'react';
import SAPage from '../../pages/sa';

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
        <Route exact path={'/about'} element={<AboutPage />} />
        <Route exact path={'/africa_quiz'} element={<AfricaQPage />} />
        <Route exact path={'/landing'} element={<LandingPage />} />
    </Routes>
);

export default PageSwitch;