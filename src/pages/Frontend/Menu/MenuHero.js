import React from 'react';
import { useNavigate } from 'react-router-dom';


const MenuHero = () => {
  // Hardcoded data for the featured product
  const product = {
    id: 1,
    name: 'Great Lighting Keyboard',
    price: '$129.99',
    imageUrl: 'https://freepngimg.com/download/light/163113-light-keyboard-led-gaming-free-hd-image.png' // Replace with your image URL
  };

  const navigate = useNavigate()

  return (
    <section className="hero-banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1>Introducing Our Latest Innovation</h1>
          <p>Upgrade your typing experience with the Great Lighting Keyboard. Designed for ultimate comfort and performance.</p>
          <button className="cta-button" onClick={()=>{navigate("/product/6053576088")}}>Shop Now</button>
        </div>
        <div className="banner-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
      </div>
    </section>
  );
};

export default MenuHero;
