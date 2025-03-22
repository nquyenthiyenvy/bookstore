import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'cod',
    note: ''
  });

  const [orderSummary, setOrderSummary] = useState({
    subtotal: 287000,
    shipping: 30000,
    total: 317000,
    items: [
      {
        id: 1,
        title: "Đắc Nhân Tâm",
        quantity: 1,
        price: 89000
      },
      {
        id: 2,
        title: "Nhà Giả Kim",
        quantity: 2,
        price: 99000
      }
    ]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const order = {
      ...formData,
      ...orderSummary,
      orderDate: new Date().toISOString(),
      status: 'pending'
    };

    try {
      // Gọi API tạo đơn hàng
      // const response = await fetch('/api/orders', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(order)
      // });

      // if (response.ok) {
      //   if (formData.paymentMethod === 'cod') {
      //     navigate('/order-success');
      //   } else if (formData.paymentMethod === 'vnpay') {
      //     // Xử lý thanh toán VNPay
      //     window.location.href = vnpayPaymentUrl;
      //   } else if (formData.paymentMethod === 'zalopay') {
      //     // Xử lý thanh toán ZaloPay
      //     window.location.href = zalopayPaymentUrl;
      //   }
      // }

      // Tạm thời chuyển hướng đến trang thành công
      navigate('/order-success');
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Có lỗi xảy ra khi tạo đơn hàng. Vui lòng thử lại.');
    }
  };

  return (
    <div className="checkout-page">
      <h1>Thanh toán</h1>
      
      <div className="checkout-container">
        <div className="checkout-form">
          <h2>Thông tin giao hàng</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Họ và tên</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Số điện thoại</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Địa chỉ</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                required
                placeholder="Nhập địa chỉ chi tiết của bạn"
              />
            </div>

            <div className="form-group">
              <label htmlFor="paymentMethod">Phương thức thanh toán</label>
              <div className="payment-methods">
                <div className="payment-method">
                  <input
                    type="radio"
                    id="cod"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                  />
                  <label htmlFor="cod">
                    <span className="payment-icon">💵</span>
                    Thanh toán khi nhận hàng (COD)
                  </label>
                </div>

                <div className="payment-method">
                  <input
                    type="radio"
                    id="vnpay"
                    name="paymentMethod"
                    value="vnpay"
                    checked={formData.paymentMethod === 'vnpay'}
                    onChange={handleChange}
                  />
                  <label htmlFor="vnpay">
                    <span className="payment-icon">🏦</span>
                    VNPay
                  </label>
                </div>

                <div className="payment-method">
                  <input
                    type="radio"
                    id="zalopay"
                    name="paymentMethod"
                    value="zalopay"
                    checked={formData.paymentMethod === 'zalopay'}
                    onChange={handleChange}
                  />
                  <label htmlFor="zalopay">
                    <span className="payment-icon">📱</span>
                    ZaloPay
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="note">Ghi chú</label>
              <textarea
                id="note"
                name="note"
                value={formData.note}
                onChange={handleChange}
                rows="3"
                placeholder="Ghi chú thêm về đơn hàng của bạn"
              />
            </div>

            <button type="submit" className="checkout-button">
              Đặt hàng
            </button>
          </form>
        </div>

        <div className="order-summary">
          <h2>Tóm tắt đơn hàng</h2>
          <div className="order-items">
            {orderSummary.items.map(item => (
              <div key={item.id} className="order-item">
                <div className="item-info">
                  <span className="item-title">{item.title}</span>
                  <span className="item-quantity">x{item.quantity}</span>
                </div>
                <span className="item-price">{item.price.toLocaleString()}đ</span>
              </div>
            ))}
          </div>

          <div className="summary-row">
            <span>Tạm tính:</span>
            <span>{orderSummary.subtotal.toLocaleString()}đ</span>
          </div>

          <div className="summary-row">
            <span>Phí vận chuyển:</span>
            <span>{orderSummary.shipping.toLocaleString()}đ</span>
          </div>

          <div className="summary-total">
            <span>Tổng cộng:</span>
            <span>{orderSummary.total.toLocaleString()}đ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 