import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PortalPage from './pages/PortalPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import OnboardingPage from './pages/auth/OnboardingPage';
import { AuthProvider, useAuth } from './context/AuthContext';

// Scroll to top on route change component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Protected Route Wrapper
function ProtectedRoute({ children, requireOnboardingComplete = false }) {
  const { isAuthenticated, onboardingStep } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If user is accessing Portal but hasn't finished onboarding
  if (requireOnboardingComplete && onboardingStep < 4) {
    return <Navigate to="/onboarding" replace />;
  }

  // If user is accessing Onboarding but has already finished it
  if (!requireOnboardingComplete && onboardingStep >= 4) {
    return <Navigate to="/portal" replace />;
  }

  return children;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/onboarding"
            element={
              <ProtectedRoute requireOnboardingComplete={false}>
                <OnboardingPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/portal"
            element={
              <ProtectedRoute requireOnboardingComplete={true}>
                <PortalPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
