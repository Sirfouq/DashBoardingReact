import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MainRoutes from './utility/routes';
import LoginPage from './pages/LoginPage';
import { verifySession } from './requests/api'; // Make sure this path is correct
import { AuthProvider } from './contexts/AuthProvider';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        await verifySession();
        setIsLoggedIn(true); // Set to true if session is valid
      } catch (error) {
        console.error('Session verification failed:', error);
        setIsLoggedIn(false); // Set to false if session is not valid or verification fails
      } finally {
        setIsVerifying(false); // Ensure we update the loading state regardless of the outcome
      }
    };

    checkSession();
  }, []);

  if (isVerifying) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {isLoggedIn ? (
            <Route path="/*" element={<MainLayout><MainRoutes /></MainLayout>} />
          ) : (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<Navigate to="/login" replace = {true} />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
