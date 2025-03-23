import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="wrap-dashboard">
      <header className="heading-dashboard">
        <NavLink to="." end>
          DashBoard
          <AiOutlineDashboard />
        </NavLink>
      </header>
      <ul className="list-dashboard">
        <li>
          <NavLink className="nav-link" to="." end>
            Hàng Hóa
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="category">
            Loại Hàng Hóa
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="manufacturer">
            Nhà Sản Xuất
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="employee">
            Nhân Viên
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="customer">
            Khách Hàng
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="goodsnote">
            Phiếu Xuất
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="invoice">
            Hóa Đơn
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
