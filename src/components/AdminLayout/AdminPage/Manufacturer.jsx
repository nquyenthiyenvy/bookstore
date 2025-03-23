import React, { useState } from "react";
import "./Manufacturer.css";

const Manufacturer = () => {
  const [manufacturers, setManufacturers] = useState([
    {
      id: 1,
      name: "Công ty A",
      address: "Hà Nội",
      email: "a@example.com",
      phone: "0123456789",
    },
    {
      id: 2,
      name: "Công ty B",
      address: "TP HCM",
      email: "b@example.com",
      phone: "0987654321",
    },
  ]);
  const [newManufacturer, setNewManufacturer] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [editingId, setEditingId] = useState(null);

  const handleAdd = () => {
    if (
      newManufacturer.name &&
      newManufacturer.address &&
      newManufacturer.email &&
      newManufacturer.phone
    ) {
      setManufacturers([
        ...manufacturers,
        { id: Date.now(), ...newManufacturer },
      ]);
      setNewManufacturer({ name: "", address: "", email: "", phone: "" });
    }
  };

  const handleDelete = (id) => {
    setManufacturers(
      manufacturers.filter((manufacturer) => manufacturer.id !== id)
    );
  };

  const handleEdit = (id) => {
    const manufacturerToEdit = manufacturers.find(
      (manufacturer) => manufacturer.id === id
    );
    setNewManufacturer(manufacturerToEdit);
    setEditingId(id);
  };

  const handleUpdate = () => {
    setManufacturers(
      manufacturers.map((manufacturer) =>
        manufacturer.id === editingId
          ? { ...manufacturer, ...newManufacturer }
          : manufacturer
      )
    );
    setNewManufacturer({ name: "", address: "", email: "", phone: "" });
    setEditingId(null);
  };

  return (
    <div className="manufacturer-container">
      <h2 className="manufacturer-title">Quản lý Nhà Sản Xuất</h2>
      <div className="manufacturer-form">
        <input
          className="manufacturer-input"
          type="text"
          placeholder="Tên Nhà Sản Xuất"
          value={newManufacturer.name}
          onChange={(e) =>
            setNewManufacturer({ ...newManufacturer, name: e.target.value })
          }
        />
        <input
          className="manufacturer-input"
          type="text"
          placeholder="Địa chỉ"
          value={newManufacturer.address}
          onChange={(e) =>
            setNewManufacturer({ ...newManufacturer, address: e.target.value })
          }
        />
        <input
          className="manufacturer-input"
          type="email"
          placeholder="Email"
          value={newManufacturer.email}
          onChange={(e) =>
            setNewManufacturer({ ...newManufacturer, email: e.target.value })
          }
        />
        <input
          className="manufacturer-input"
          type="text"
          placeholder="Số điện thoại"
          value={newManufacturer.phone}
          onChange={(e) =>
            setNewManufacturer({ ...newManufacturer, phone: e.target.value })
          }
        />
        <button
          className="manufacturer-button add"
          onClick={editingId ? handleUpdate : handleAdd}
        >
          {editingId ? "Cập nhật" : "Thêm"}
        </button>
      </div>
      <table className="manufacturer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Địa Chỉ</th>
            <th>Email</th>
            <th>Số Điện Thoại</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {manufacturers.map((manufacturer) => (
            <tr key={manufacturer.id}>
              <td>{manufacturer.id}</td>
              <td>{manufacturer.name}</td>
              <td>{manufacturer.address}</td>
              <td>{manufacturer.email}</td>
              <td>{manufacturer.phone}</td>
              <td>
                <button
                  className="manufacturer-button edit"
                  onClick={() => handleEdit(manufacturer.id)}
                >
                  Sửa
                </button>
                <button
                  className="manufacturer-button delete"
                  onClick={() => handleDelete(manufacturer.id)}
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

export default Manufacturer;
