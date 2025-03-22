import React from 'react';
import { Link } from 'react-router-dom';
import './OrderSuccess.css';

const OrderSuccess = () => {
  return (
    <div className="order-success">
      <div className="success-container">
        <div className="success-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h1>Đặt hàng thành công!</h1>
        <p>Cảm ơn bạn đã mua hàng tại BookStore. Chúng tôi sẽ xử lý đơn hàng của bạn trong thời gian sớm nhất.</p>
        <div className="success-actions">
          <Link to="/" className="continue-shopping">
            Tiếp tục mua sắm
          </Link>
          <Link to="/orders" className="view-orders">
            Xem đơn hàng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess; 