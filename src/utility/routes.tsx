import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import DataTableVIew from '../tables/peopleTableView';
import StoreTableView from '@/tables/storeTableView';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/people" element={<DataTableVIew />} />
      <Route path="/store" element={<StoreTableView />} />
      {/* If you need a catch-all route for undefined paths, you can uncomment the next line */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default MainRoutes;
