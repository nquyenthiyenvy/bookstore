import React, { useState } from "react";
import "./ProductDashboard.css"

const ProductDashboard = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: "1000",
      importPrice: "800",
      stock: 50,
      description: "High-performance laptop",
    },
    {
      id: 2,
      name: "T-shirt",
      price: "20",
      importPrice: "10",
      stock: 200,
      description: "Cotton T-shirt",
    },
  ]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    importPrice: "",
    stock: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleAdd = () => {
    if (newProduct.name) {
      setProducts([...products, { id: Date.now(), ...newProduct }]);
      setNewProduct({
        name: "",
        price: "",
        importPrice: "",
        stock: "",
        description: "",
      });
    }
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEdit = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setNewProduct(productToEdit);
    setEditingId(id);
  };

  const handleUpdate = () => {
    setProducts(
      products.map((product) =>
        product.id === editingId ? { ...product, ...newProduct } : product
      )
    );
    setNewProduct({
      name: "",
      price: "",
      importPrice: "",
      stock: "",
      description: "",
    });
    setEditingId(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="product-container">
      <h2 className="product-title">Quản lý Hàng Hóa</h2>
      <div className="product-form">
        <input
          className="product-input"
          type="text"
          placeholder="Tên hàng hóa"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          className="product-input"
          type="text"
          placeholder="Giá bán"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
        <input
          className="product-input"
          type="text"
          placeholder="Giá nhập"
          value={newProduct.importPrice}
          onChange={(e) =>
            setNewProduct({ ...newProduct, importPrice: e.target.value })
          }
        />
        <input
          className="product-input"
          type="text"
          placeholder="Số lượng tồn kho"
          value={newProduct.stock}
          onChange={(e) =>
            setNewProduct({ ...newProduct, stock: e.target.value })
          }
        />
        <input
          className="product-input"
          type="text"
          placeholder="Mô tả"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        />
        {editingId ? (
          <button className="product-button update" onClick={handleUpdate}>
            Cập nhật
          </button>
        ) : (
          <button className="product-button add" onClick={handleAdd}>
            Thêm
          </button>
        )}
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên Hàng Hóa</th>
            <th>Giá Bán</th>
            <th>Giá Nhập</th>
            <th>Số Lượng Tồn Kho</th>
            <th>Mô Tả</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.importPrice}</td>
              <td>{product.stock}</td>
              <td>{product.description}</td>
              <td>
                <button
                  className="product-button edit"
                  onClick={() => handleEdit(product.id)}
                >
                  Sửa
                </button>
                <button
                  className="product-button delete"
                  onClick={() => handleDelete(product.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="product-pagination">
        <button
          className="product-button page"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo; Trước
        </button>
        <span className="product-page-info">Trang {currentPage}</span>
        <button
          className="product-button page"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastItem >= products.length}
        >
          Sau &raquo;
        </button>
      </div>
    </div>
  );
};

export default ProductDashboard;
