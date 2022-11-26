import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQs</span>
          <span>Store</span>
          <span>Pages</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            nisi accusamus consequuntur error fuga quos sint suscipit, soluta
            quaerat recusandae assumenda sunt. Blanditiis, quia! Ex natus
            reprehenderit nesciunt quia magni?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            nisi accusamus consequuntur error fuga quos sint suscipit, soluta
            quaerat recusandae assumenda sunt. Blanditiis, quia! Ex natus
            reprehenderit nesciunt quia magni?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">PragaStore</span>
          <span className="copyright">
            &#169; 2023 Copyright. All rights reserved.
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="pay" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
