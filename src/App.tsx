import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MainRoutes from './utility/routes';
import LoginPage from './pages/LoginPage';
import { verifySession } from './requests/api';
import { AuthProvider, useAuth } from './contexts/AuthProvider'; // Make sure this path is correct
import BottomBar from './components/BottomBar';
import HomePage from './pages/HomePage';
import DemoPage from './tables/page';

const AuthenticatedApp = () => {
  const { isLoggedIn, login, logout } = useAuth();
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response =await verifySession();

        response.logged_in?login():logout(); // Set to true if session is valid
      } catch (error) {
        console.error('Session verification failed:', error);
        logout(); // Set to false if session is not valid or verification fails
      } finally {
        setIsVerifying(false); // Ensure we update the loading state regardless of the outcome
      }
    };

    checkSession();
  }, [login, logout]); 

  if (isVerifying) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-hidden">
        <Routes>
          {isLoggedIn ? (
            <Route path="/*" element={<MainLayout><MainRoutes /></MainLayout>} />
           ) : ( 
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<LoginPage />} />
            </>
           )} 
        </Routes>
      </div>
      {/* <BottomBar /> */}
    </div>
    
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AuthenticatedApp />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
