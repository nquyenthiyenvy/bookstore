import React, { useState } from "react";
import "./Customer.css";

const Customer = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      fullName: "Nguyen Van A",
      address: "Hanoi",
      phone: "0123456789",
      email: "a@gmail.com",
    },
    {
      id: 2,
      fullName: "Tran Thi B",
      address: "HCMC",
      phone: "0987654321",
      email: "b@gmail.com",
    },
  ]);
  const [newCustomer, setNewCustomer] = useState({
    fullName: "",
    address: "",
    phone: "",
    email: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleAdd = () => {
    if (newCustomer.fullName) {
      setCustomers([...customers, { id: Date.now(), ...newCustomer }]);
      setNewCustomer({ fullName: "", address: "", phone: "", email: "" });
    }
  };

  const handleDelete = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  const handleEdit = (id) => {
    const customerToEdit = customers.find((customer) => customer.id === id);
    setNewCustomer(customerToEdit);
    setEditingId(id);
  };

  const handleUpdate = () => {
    setCustomers(
      customers.map((customer) =>
        customer.id === editingId ? { ...customer, ...newCustomer } : customer
      )
    );
    setNewCustomer({ fullName: "", address: "", phone: "", email: "" });
    setEditingId(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = customers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="customer-container">
      <h2 className="customer-title">Quản lý Khách Hàng</h2>
      <div className="customer-form">
        <input
          className="customer-input"
          type="text"
          placeholder="Họ và tên"
          value={newCustomer.fullName}
          onChange={(e) =>
            setNewCustomer({ ...newCustomer, fullName: e.target.value })
          }
        />
        <input
          className="customer-input"
          type="text"
          placeholder="Địa chỉ"
          value={newCustomer.address}
          onChange={(e) =>
            setNewCustomer({ ...newCustomer, address: e.target.value })
          }
        />
        <input
          className="customer-input"
          type="text"
          placeholder="Số điện thoại"
          value={newCustomer.phone}
          onChange={(e) =>
            setNewCustomer({ ...newCustomer, phone: e.target.value })
          }
        />
        <input
          className="customer-input"
          type="email"
          placeholder="Email"
          value={newCustomer.email}
          onChange={(e) =>
            setNewCustomer({ ...newCustomer, email: e.target.value })
          }
        />
        {editingId ? (
          <button className="customer-button update" onClick={handleUpdate}>
            Cập nhật
          </button>
        ) : (
          <button className="customer-button add" onClick={handleAdd}>
            Thêm
          </button>
        )}
      </div>
      <table className="customer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ và Tên</th>
            <th>Địa Chỉ</th>
            <th>Số Điện Thoại</th>
            <th>Email</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.fullName}</td>
              <td>{customer.address}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
              <td>
                <button
                  className="customer-button edit"
                  onClick={() => handleEdit(customer.id)}
                >
                  Sửa
                </button>
                <button
                  className="customer-button delete"
                  onClick={() => handleDelete(customer.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="customer-pagination">
        <button
          className="customer-button page"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo; Trước
        </button>
        <span className="customer-page-info">Trang {currentPage}</span>
        <button
          className="customer-button page"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastItem >= customers.length}
        >
          Sau &raquo;
        </button>
      </div>
    </div>
  );
};

export default Customer;
