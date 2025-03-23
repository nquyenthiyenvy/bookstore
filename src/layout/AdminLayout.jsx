import React from "react";
import "./AdminLayout.css";
import AdminHeader from "../components/AdminLayout/AdminHeader";
import Sidebar from "../components/AdminLayout/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div>
        <AdminHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
