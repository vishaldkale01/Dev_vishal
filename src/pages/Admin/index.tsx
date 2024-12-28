import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminLayout } from './components/AdminLayout';
import { Dashboard } from './routes/Dashboard';
import { Login } from './routes/Login';

export function Admin() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        {/* Additional routes will be added for profile, projects, and skills */}
      </Route>
    </Routes>
  );
}