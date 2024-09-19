import React from 'react';
import './BodyContent.css';

import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpg";
import images from "../assets/images.jpeg";
import image3 from "../assets/image3.jpg";
const BodyContent: React.FC = () => {
  return (
    <div className="body-content">
      {/* IITH News, Events, Quick Links */}
      <div className="news-events-links">
        <div className="news">
          <h3>IITH News</h3>
          <div className="news-item">
            <img src={image3} alt="News 1" />
            <p className="news-title">Mid Term Regular and Direct Ph.D. Admission is now open</p>
            <span className="news-date">05 Sep 2024</span>
          </div>
          <div className="news-item">
            <p className="news-title">IITH-SURE Internship 2024 Second List Results are announced</p>
            <span className="news-date">03 May 2024</span>
          </div>
          <a href="#" className="news-link">All News</a>
        </div>

        <div className="events">
          <h3>Upcoming Events</h3>
          <img src={images} alt="Event" />
          <p className="events-title">All Events</p>
        </div>

        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Academic Bank of Credit</a></li>
            <li><a href="#">Academic Calendars</a></li>
            <li><a href="#">Fee structure</a></li>
          </ul>
        </div>
      </div>

      {/* Student Highlights */}
      <div className="student-highlights">
  <h3>Student Highlights</h3>
  <div className="highlight">
    
    <p className="highlight-title">Mr. Sandal Kotawala, MTech Ophthalmic Engineering Student’s Start-up 'Alfaleus' Selected for 2024 MedTech Innovator APAC Accelerator</p>
    <span className="highlight-date">21 Aug 2024</span>
  </div>
  <div className="highlight">
    
    <p className="highlight-title">Dr. Aswathi Velayathikode Anand has joined the NIT Raipur as an Assistant Professor</p>
    <span className="highlight-date">13 Mar 2024</span>
  </div>
  <div className="highlight">
    
    <p className="highlight-title">Mr. Kumar Shaurav has been offered the position of Assistant Professor Grade-II at IIM Ranchi</p>
    <span className="highlight-date">10 Mar 2024</span>
  </div>
</div>

    </div>
  );
};

export default BodyContent;
