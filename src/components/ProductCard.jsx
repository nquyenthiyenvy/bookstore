import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product, isFlashSale }) => {
  const { id, title, author, price, image, discount } = product;

  const discountedPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-link">
        <div className="product-image">
          <img src={image} alt={title} />
          {isFlashSale && <div className="flash-sale-badge">Flash Sale</div>}
        </div>
        <div className="product-info">
          <h3 className="product-title">{title}</h3>
          <p className="product-author">{author}</p>
          <div className="product-price">
            {discount && (
              <span className="original-price">{price.toLocaleString()}đ</span>
            )}
            <span className="current-price">{discountedPrice.toLocaleString()}đ</span>
            {discount && <span className="discount-badge">-{discount}%</span>}
          </div>
        </div>
      </Link>
      <button className="favorite-button">
        <FaHeart />
      </button>
    </div>
  );
};

export default ProductCard; 