import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      title: 'Đắc Nhân Tâm',
      author: 'Dale Carnegie',
      price: 99000,
      image: 'https://example.com/dac-nhan-tam.jpg',
      discount: 20
    },
    {
      id: 2,
      title: 'Nhà Giả Kim',
      author: 'Paulo Coelho',
      price: 89000,
      image: 'https://example.com/nha-gia-kim.jpg',
      discount: 15
    },
    {
      id: 3,
      title: '7 Thói Quen Hiệu Quả',
      author: 'Stephen R. Covey',
      price: 129000,
      image: 'https://example.com/7-thoi-quen.jpg',
      discount: 25
    },
    {
      id: 4,
      title: 'Đọc Vị Bất Kỳ Ai',
      author: 'David J. Lieberman',
      price: 79000,
      image: 'https://example.com/doc-vi-bat-ky-ai.jpg',
      discount: 10
    }
  ];

  const bestSellers = [
    {
      id: 5,
      title: 'Nghĩ Giàu Làm Giàu',
      author: 'Napoleon Hill',
      price: 119000,
      image: 'https://example.com/nghi-giau-lam-giau.jpg',
      sold: 1500
    },
    {
      id: 6,
      title: 'Không Gia Đình',
      author: 'Hector Malot',
      price: 69000,
      image: 'https://example.com/khong-gia-dinh.jpg',
      sold: 1200
    },
    {
      id: 7,
      title: 'Tuổi Trẻ Đáng Giá Bao Nhiêu',
      author: 'Rosie Nguyễn',
      price: 89000,
      image: 'https://example.com/tuoi-tre-dang-gia-bao-nhieu.jpg',
      sold: 1000
    },
    {
      id: 8,
      title: 'Đời Ngắn Đừng Ngủ Dài',
      author: 'Robin Sharma',
      price: 99000,
      image: 'https://example.com/doi-ngan-dung-ngu-dai.jpg',
      sold: 800
    }
  ];

  const flashSaleProducts = [
    {
      id: 9,
      title: 'Số Đỏ',
      author: 'Vũ Trọng Phụng',
      price: 59000,
      originalPrice: 89000,
      image: 'https://example.com/so-do.jpg',
      timeLeft: '12:00:00'
    },
    {
      id: 10,
      title: 'Truyện Kiều',
      author: 'Nguyễn Du',
      price: 49000,
      originalPrice: 79000,
      image: 'https://example.com/truyen-kieu.jpg',
      timeLeft: '12:00:00'
    },
    {
      id: 11,
      title: 'Chí Phèo',
      author: 'Nam Cao',
      price: 39000,
      originalPrice: 69000,
      image: 'https://example.com/chi-pheo.jpg',
      timeLeft: '12:00:00'
    },
    {
      id: 12,
      title: 'Tắt Đèn',
      author: 'Ngô Tất Tố',
      price: 49000,
      originalPrice: 79000,
      image: 'https://example.com/tat-den.jpg',
      timeLeft: '12:00:00'
    }
  ];

  return (
    <div className="home-page">
      <section className="banner">
        <img src="https://example.com/banner.jpg" alt="Banner" />
        <div className="banner-content">
          <h1>Chào mừng đến với BookStore</h1>
          <p>Khám phá thế giới sách với những tác phẩm hay nhất</p>
          <Link to="/products" className="banner-button">
            Khám phá ngay
          </Link>
        </div>
      </section>

      <section className="featured-products">
        <h2 className="section-title">Sản phẩm nổi bật</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-author">{product.author}</p>
                <div className="product-price-container">
                  <span className="product-price">{product.price.toLocaleString()}đ</span>
                  {product.discount && (
                    <span className="product-discount">-{product.discount}%</span>
                  )}
                </div>
                <button className="add-to-cart">Thêm vào giỏ hàng</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="best-sellers">
        <h2 className="section-title">Sản phẩm bán chạy</h2>
        <div className="products-grid">
          {bestSellers.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-author">{product.author}</p>
                <div className="product-price-container">
                  <span className="product-price">{product.price.toLocaleString()}đ</span>
                  <span className="product-sold">Đã bán: {product.sold}</span>
                </div>
                <button className="add-to-cart">Thêm vào giỏ hàng</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flash-sale">
        <h2 className="section-title">Flash Sale</h2>
        <div className="products-grid">
          {flashSaleProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-author">{product.author}</p>
                <div className="product-price-container">
                  <span className="product-price">{product.price.toLocaleString()}đ</span>
                  <span className="product-original-price">{product.originalPrice.toLocaleString()}đ</span>
                </div>
                <div className="flash-sale-timer">
                  <span>Còn lại: {product.timeLeft}</span>
                </div>
                <button className="add-to-cart">Thêm vào giỏ hàng</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 