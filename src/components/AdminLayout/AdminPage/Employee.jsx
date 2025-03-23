import React, { useState, useEffect } from "react";
import "./Employee.css";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    fullName: "",
    position: "",
    phone: "",
    email: "",
    salary: "",
    startDate: "",
    status: true,
  });
  const [editingId, setEditingId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setEmployees([
      {
        id: 1,
        fullName: "Nguyen Van A",
        position: "Manager",
        phone: "0123456789",
        email: "a@gmail.com",
        salary: 1000,
        startDate: "2022-01-01",
        status: true,
      },
      {
        id: 2,
        fullName: "Tran Thi B",
        position: "Staff",
        phone: "0987654321",
        email: "b@gmail.com",
        salary: 800,
        startDate: "2023-05-10",
        status: false,
      },
    ]);
  }, []);

  const handleAdd = () => {
    if (newEmployee.fullName) {
      setEmployees([...employees, { id: Date.now(), ...newEmployee }]);
      setNewEmployee({
        fullName: "",
        position: "",
        phone: "",
        email: "",
        salary: "",
        startDate: "",
        status: true,
      });
    }
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const handleEdit = (id) => {
    const employeeToEdit = employees.find((employee) => employee.id === id);
    setNewEmployee(employeeToEdit);
    setEditingId(id);
  };

  const handleUpdate = () => {
    setEmployees(
      employees.map((employee) =>
        employee.id === editingId ? { ...employee, ...newEmployee } : employee
      )
    );
    setNewEmployee({
      fullName: "",
      position: "",
      phone: "",
      email: "",
      salary: "",
      startDate: "",
      status: true,
    });
    setEditingId(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = employees.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="employee-container">
      <h2 className="employee-title">Quản lý Nhân Viên</h2>
      <div className="employee-form">
        <input
          className="employee-input"
          type="text"
          placeholder="Họ và tên"
          value={newEmployee.fullName}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, fullName: e.target.value })
          }
        />
        <input
          className="employee-input"
          type="text"
          placeholder="Chức vụ"
          value={newEmployee.position}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, position: e.target.value })
          }
        />
        <input
          className="employee-input"
          type="text"
          placeholder="Số điện thoại"
          value={newEmployee.phone}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, phone: e.target.value })
          }
        />
        <input
          className="employee-input"
          type="email"
          placeholder="Email"
          value={newEmployee.email}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, email: e.target.value })
          }
        />
        <input
          className="employee-input"
          type="number"
          placeholder="Lương"
          value={newEmployee.salary}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, salary: e.target.value })
          }
        />
        <input
          className="employee-input"
          type="date"
          value={newEmployee.startDate}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, startDate: e.target.value })
          }
        />
        <button
          className="employee-button add"
          onClick={editingId ? handleUpdate : handleAdd}
        >
          {editingId ? "Cập nhật" : "Thêm"}
        </button>
      </div>
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ và Tên</th>
            <th>Chức Vụ</th>
            <th>Số Điện Thoại</th>
            <th>Email</th>
            <th>Lương</th>
            <th>Ngày Vào Làm</th>
            <th>Trạng Thái</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.fullName}</td>
              <td>{employee.position}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.salary}</td>
              <td>{employee.startDate}</td>
              <td>{employee.status ? "Đang làm" : "Nghỉ việc"}</td>
              <td>
                <button
                  className="employee-button edit"
                  onClick={() => handleEdit(employee.id)}
                >
                  Sửa
                </button>
                <button
                  className="employee-button delete"
                  onClick={() => handleDelete(employee.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="employee-pagination">
        <button
          className="employee-button page"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo; Trước
        </button>
        <span className="employee-page-info">Trang {currentPage}</span>
        <button
          className="employee-button page"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastItem >= employees.length}
        >
          Sau &raquo;
        </button>
      </div>
    </div>
  );
};

export default Employee;
