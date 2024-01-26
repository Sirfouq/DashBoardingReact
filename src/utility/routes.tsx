// src/routes/routes.js or routes.tsx

import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { Card } from '@mui/material';
import CardComp from '../components/Card';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}>
                {/* <Route path="profile" element={<ProfileComponent />} /> */}
                {/* <Route path="settings" element={<CardComp title={'Αγορές'} revenue={77}/>} /> */}
                {/* More routes can be added here */}
            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
};

export default MainRoutes;
