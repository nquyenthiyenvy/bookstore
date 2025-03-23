import React from "react";
import "./AdminHeader.css";
import { FaSearch, FaMailBulk, FaBell, FaSignOutAlt } from "react-icons/fa";
const AdminHeader = () => {
  return (
    <header className="header-admin">
      <div className="search-bar">
        <input type="text" className="search-input" placeholder="Tìm kiếm..." />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
      <div>
        <button className="button-dashboard">
          <FaMailBulk />
        </button>
        <button className="button-dashboard">
          <FaBell />
        </button>
        <button className="button-dashboard">
          <img src="" alt="avatar-user" />
        </button>
        <button className="button-dashboard">
          <FaSignOutAlt />
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
