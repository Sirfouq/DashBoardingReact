import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sidebar, { SidebarItem } from './components/Sidebar';
import { Home, Settings, User } from "lucide-react"; // Import the icons you want to use
import Searchbar from './components/Searchbar';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import { BrowserRouter,Navigate,Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';
import MainRoutes from './utility/routes';





const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        {/* Conditionally render routes based on isLoggedIn */}
        {isLoggedIn ? (
          // Wrap MainRoutes within MainLayout when the user is logged in
          <Route path="/*" element={<MainLayout><MainRoutes /></MainLayout>} />
        ) : (
          // Redirect to login page if not logged in
          <>
            <Route path="/login" element={<LoginPage  />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;


