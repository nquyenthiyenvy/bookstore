import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Về BookStore</h3>
          <p>BookStore là nơi bạn có thể tìm thấy những cuốn sách hay nhất với giá tốt nhất.</p>
        </div>
        
        <div className="footer-section">
          <h3>Liên kết nhanh</h3>
          <ul>
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/products">Sản phẩm</Link></li>
            <li><Link to="/about">Về chúng tôi</Link></li>
            <li><Link to="/contact">Liên hệ</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Hỗ trợ</h3>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/shipping">Vận chuyển</Link></li>
            <li><Link to="/returns">Đổi trả</Link></li>
            <li><Link to="/privacy">Chính sách bảo mật</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Kết nối với chúng tôi</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <div className="contact-info">
            <p>Email: contact@bookstore.com</p>
            <p>Điện thoại: (84) 123-456-789</p>
            <p>Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 BookStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 