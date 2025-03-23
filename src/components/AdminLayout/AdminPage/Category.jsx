import React, { useState } from "react";
import "./Category.css";
const Category = () => {
  const [productTypes, setProductTypes] = useState([
    { id: 1, name: "Electronics", description: "Devices and gadgets" },
    { id: 2, name: "Clothing", description: "Apparel and accessories" },
    { id: 3, name: "Books", description: "Fiction and non-fiction books" },
  ]);
  const [newType, setNewType] = useState({ name: "", description: "" });
  const [editingId, setEditingId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleAdd = () => {
    if (newType.name) {
      setProductTypes([...productTypes, { id: Date.now(), ...newType }]);
      setNewType({ name: "", description: "" });
    }
  };

  const handleDelete = (id) => {
    setProductTypes(productTypes.filter((type) => type.id !== id));
  };

  const handleEdit = (id) => {
    const typeToEdit = productTypes.find((type) => type.id === id);
    setNewType(typeToEdit);
    setEditingId(id);
  };

  const handleUpdate = () => {
    setProductTypes(
      productTypes.map((type) =>
        type.id === editingId ? { ...type, ...newType } : type
      )
    );
    setNewType({ name: "", description: "" });
    setEditingId(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productTypes.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="category-container">
      <h2 className="category-title">Quản lý Loại Hàng Hóa</h2>
      <div className="category-form">
        <input
          className="category-input"
          type="text"
          placeholder="Tên loại hàng hóa"
          value={newType.name}
          onChange={(e) => setNewType({ ...newType, name: e.target.value })}
        />
        <input
          className="category-input"
          type="text"
          placeholder="Mô tả"
          value={newType.description}
          onChange={(e) =>
            setNewType({ ...newType, description: e.target.value })
          }
        />
        {editingId ? (
          <button className="category-button update" onClick={handleUpdate}>
            Cập nhật
          </button>
        ) : (
          <button className="category-button add" onClick={handleAdd}>
            Thêm
          </button>
        )}
      </div>
      <table className="category-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên Loại Hàng</th>
            <th>Mô Tả</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((type) => (
            <tr key={type.id}>
              <td>{type.id}</td>
              <td>{type.name}</td>
              <td>{type.description}</td>
              <td>
                <button
                  className="category-button edit"
                  onClick={() => handleEdit(type.id)}
                >
                  Sửa
                </button>
                <button
                  className="category-button delete"
                  onClick={() => handleDelete(type.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="category-pagination">
        <button
          className="category-button page"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo; Trước
        </button>
        <span className="category-page-info">Trang {currentPage}</span>
        <button
          className="category-button page"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastItem >= productTypes.length}
        >
          Sau &raquo;
        </button>
      </div>
    </div>
  );
};

export default Category;
