import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import Dashboard from '../pages/dashboard/DashboardPage';
import NotFoundPage from '../pages/notFound/NotFoundPage';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}