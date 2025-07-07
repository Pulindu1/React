// src/Footer.jsx
import React from "react";
import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css"; // optional, for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 DUREFIS. All rights reserved.</p>
      <div className="footer-icons">
        <a href="mailto:durefis@durham.ac.uk" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/company/durefis/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/durefissoc?igsh=MTE5azhiemRlZXV2OQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
