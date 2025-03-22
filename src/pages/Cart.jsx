import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = [
    {
      id: 1,
      title: "Đắc Nhân Tâm",
      price: 89000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Nhà Giả Kim",
      price: 99000,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 30000;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      <h1>Giỏ hàng</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Giỏ hàng của bạn đang trống</p>
          <button onClick={() => navigate('/')}>Tiếp tục mua sắm</button>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p className="price">{item.price.toLocaleString()}đ</p>
                </div>
                <div className="quantity-controls">
                  <button className="quantity-btn">-</button>
                  <span>{item.quantity}</span>
                  <button className="quantity-btn">+</button>
                </div>
                <button className="remove-btn">×</button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Tóm tắt đơn hàng</h2>
            <div className="summary-row">
              <span>Tạm tính:</span>
              <span>{subtotal.toLocaleString()}đ</span>
            </div>
            <div className="summary-row">
              <span>Phí vận chuyển:</span>
              <span>{shipping.toLocaleString()}đ</span>
            </div>
            <div className="summary-total">
              <span>Tổng cộng:</span>
              <span>{total.toLocaleString()}đ</span>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>
              Tiến hành thanh toán
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 