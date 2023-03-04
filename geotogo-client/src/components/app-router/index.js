import { Route, Routes } from 'react-router-dom';

import AboutPage from '../../pages/about';
import AfricaPage from '../../pages/africa';
import AfricaQPage from '../../pages/africa_quiz';
import AsiaPage from '../../pages/asia';
import AsiaQPage from '../../pages/asia_quiz';
import QuizPage from '../../pages/quiz';
import EuropePage from '../../pages/europe';
import EuropeQPage from '../../pages/europe_quiz';
import LandingPage from '../../pages/landing-page';
import HomePage from '../../pages/home';
import NAPage from '../../pages/na';
import NAQPage from '../../pages/na_quiz';
import OceaniaPage from '../../pages/oceania';
import OceaniaQPage from '../../pages/oceania_quiz';
import React from 'react';
import SAPage from '../../pages/sa';
import SAQPage from '../../pages/sa_quiz';

const PageSwitch = () => (
    <Routes>
        <Route index element={<LandingPage />} />
        <Route exact path={'/landing'} element={<LandingPage />} />
        <Route exact path='/home' element={<HomePage />} />
        <Route exact path={'/africa'} element={<AfricaPage />} />
        <Route exact path={'/asia'} element={<AsiaPage />} />
        <Route exact path={'/europe'} element={<EuropePage />} />
        <Route exact path={'/north america'} element={<NAPage />} />
        <Route exact path={'/south america'} element={<SAPage />} />
        <Route exact path={'/oceania'} element={<OceaniaPage />} />
        <Route exact path={'/quiz'} element={<QuizPage />} />
        <Route exact path={'/about'} element={<AboutPage />} />
        <Route exact path={'/africa_quiz'} element={<AfricaQPage />} />
        <Route exact path={'/asia_quiz'} element={<AsiaQPage />} />
        <Route exact path={'/europe_quiz'} element={<EuropeQPage />} />
        <Route exact path={'/na_quiz'} element={<NAQPage />} />
        <Route exact path={'/sa_quiz'} element={<SAQPage />} />
        <Route exact path={'/oceania_quiz'} element={<OceaniaQPage />} />
    </Routes>
);

export default PageSwitch;