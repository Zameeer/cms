import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h5>ACADEMICS</h5>
          <ul>
            <li><a href="#">AIMS</a></li>
            <li><a href="#">GIAN</a></li>
            <li><a href="#">CCE</a></li>
            <li><a href="#">Office of Academic Affairs</a></li>
            <li><a href="#">RAIITH</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>FACILITIES</h5>
          <ul>
            <li><a href="#">Library</a></li>
            <li><a href="#">Computer Centre</a></li>
            <li><a href="#">Central Workshop</a></li>
            <li><a href="#">Bus Schedule</a></li>
            <li><a href="#">Medical Facilities</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>CAMPUS LIFE</h5>
          <ul>
            <li><a href="#">Campus Services</a></li>
            <li><a href="#">Getting Here</a></li>
            <li><a href="#">Campus Navigation</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Discourse</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>COUNCILS</h5>
          <ul>
            <li><a href="#">SC ST Cell</a></li>
            <li><a href="#">Office of Career Services</a></li>
            <li><a href="#">NSS</a></li>
            <li><a href="#">Green Office</a></li>
            <li><a href="#">Gymkhana (Student Council)</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>QUICK LINKS</h5>
          <ul>
            <li><a href="#">Tender Invitations</a></li>
            <li><a href="#">Intranet</a></li>
            <li><a href="#">Emergency Contacts</a></li>
            <li><a href="#">Website Team</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 National Institute of Technology, Ravangla, Sikkim, India. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Sitemap</a> | <a href="#">RTI</a> | <a href="#">Contact us</a>
        </div>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
