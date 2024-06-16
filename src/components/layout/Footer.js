import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        {/* <img src="playStore.png" alt="playstore" />
        <img src="AppStore.png" alt="Appstore" /> */}
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; awasthilokesh</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/madhukar_art_collection/">Instagram</a>
        <a href="http://youtube.com/madhukarmonika">Youtube</a>
        <a href="https://www.facebook.com/lokesh.awasthi.79">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;