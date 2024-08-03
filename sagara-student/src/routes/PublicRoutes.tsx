import PublicLayout from "@/components/layouts/PublicLayout";
import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy load public components
const Dashboard = lazy(() => import("../pages/Dashboard"))
const Students = lazy(() => import("../pages/Students"))

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
