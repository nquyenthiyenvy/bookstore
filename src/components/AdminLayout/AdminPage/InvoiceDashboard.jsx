import React from "react";
import "./InvoiceDashboard.css";
const InvoiceDashboard = () => {
  const invoices = [
    {
      id: "HD001",
      date: "12/04/2024",
      amount: "1.535.000",
      payment: "Chuyển khoản",
      note: "(Không)",
    },
    {
      id: "HD002",
      date: "25/05/2024",
      amount: "18.000.000",
      payment: "Tiền mặt",
      note: "(Không)",
    },
    {
      id: "HD003",
      date: "7/6/2024",
      amount: "3.727.000",
      payment: "Tiền mặt",
      note: "(Không)",
    },
  ];

  return (
    <div className="table-container">
      <h2 style={{ margin: "8px 0" }}>Quản Lý Hóa Đơn</h2>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ngày lập</th>
            <th>Tổng tiền</th>
            <th>Thanh toán</th>
            <th>Ghi chú</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={index}>
              <td>{invoice.id}</td>
              <td>{invoice.date}</td>
              <td>{invoice.amount}</td>
              <td>{invoice.payment}</td>
              <td>{invoice.note}</td>
              <td className="action-buttons">
                <button className="add">➕ Thêm</button>
                <button className="delete">🗑 Xóa</button>
                <button className="edit">✏️ Sửa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          marginTop: "8px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button style={{ marginRight: "4px" }}>Xuất Hóa Đơn</button>
        <button>Lọc Hóa Đơn</button>
      </div>
    </div>
  );
};

export default InvoiceDashboard;
