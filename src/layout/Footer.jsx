import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          <div className="company-info">
            <span className="footer-logo">EMPASY</span>
            <p>(주)엠파시 | 대표이사: [대표이름] | 사업자등록번호: [번호]</p>
            <p>서울특별시 [주소]</p>
            <p>Email: contact@empasy.com | Tel: 02-000-0000</p>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} EMPASY. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;