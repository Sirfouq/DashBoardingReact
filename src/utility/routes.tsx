// src/routes/routes.js or routes.tsx

import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { Card } from '@mui/material';
import CardComp from '../components/Card';
import LoginPage from '../pages/LoginPage';
import DemoPage from '@/tables/page';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        {/* <Route path="profile" element={<ProfileComponent />} /> */}
            {/* <Route path="settings" element={<CardComp title={'Αγορές'} revenue={77}/>} /> */}
        {/* More routes can be added here */}
      </Route>

      <Route path="login" element ={<LoginPage/>}>
      </Route>

      <Route path="*" element ={<LoginPage/>}>

      </Route>

      <Route path='/tables' element={<DemoPage/>}>
        
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default MainRoutes;
