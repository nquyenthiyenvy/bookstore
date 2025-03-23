import React, { useState } from "react";
import "./Goodsnote.css";

const Goodsnote = () => {
  const [receipts, setReceipts] = useState([
    { id: 1, date: "2025-03-01", note: "Xuất hàng cho khách A" },
    { id: 2, date: "2025-03-10", note: "Xuất hàng cho khách B" },
  ]);
  const [newReceipt, setNewReceipt] = useState({ date: "", note: "" });
  const [editingId, setEditingId] = useState(null);

  const handleAdd = () => {
    if (newReceipt.date && newReceipt.note) {
      setReceipts([...receipts, { id: Date.now(), ...newReceipt }]);
      setNewReceipt({ date: "", note: "" });
    }
  };

  const handleDelete = (id) => {
    setReceipts(receipts.filter((receipt) => receipt.id !== id));
  };

  const handleEdit = (id) => {
    const receiptToEdit = receipts.find((receipt) => receipt.id === id);
    setNewReceipt(receiptToEdit);
    setEditingId(id);
  };

  const handleUpdate = () => {
    setReceipts(
      receipts.map((receipt) =>
        receipt.id === editingId ? { ...receipt, ...newReceipt } : receipt
      )
    );
    setNewReceipt({ date: "", note: "" });
    setEditingId(null);
  };

  return (
    <div className="receipt-container">
      <h2 className="receipt-title">Quản lý Phiếu Xuất Hàng</h2>
      <div className="receipt-form">
        <input
          className="receipt-input"
          type="date"
          value={newReceipt.date}
          onChange={(e) =>
            setNewReceipt({ ...newReceipt, date: e.target.value })
          }
        />
        <input
          className="receipt-input"
          type="text"
          placeholder="Ghi chú"
          value={newReceipt.note}
          onChange={(e) =>
            setNewReceipt({ ...newReceipt, note: e.target.value })
          }
        />
        <button
          className="receipt-button add"
          onClick={editingId ? handleUpdate : handleAdd}
        >
          {editingId ? "Cập nhật" : "Thêm"}
        </button>
      </div>
      <table className="receipt-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ngày Xuất</th>
            <th>Ghi Chú</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {receipts.map((receipt) => (
            <tr key={receipt.id}>
              <td>{receipt.id}</td>
              <td>{receipt.date}</td>
              <td>{receipt.note}</td>
              <td>
                <button
                  className="receipt-button edit"
                  onClick={() => handleEdit(receipt.id)}
                >
                  Sửa
                </button>
                <button
                  className="receipt-button delete"
                  onClick={() => handleDelete(receipt.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Goodsnote;
