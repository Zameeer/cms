import React from 'react';
import BodyContent from '../components/BodyContent';
import Slideshow from '../components/Slideshow';
//import './Home.css'; // Optional if you want to add specific styles for the Home component

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Slideshow section */}
      <div className="slideshow-container">
        <Slideshow />
      </div>

      {/* Body content section */}
      <div className="body-content-container">
        <BodyContent />
      </div>
    </div>
  );
};

export default Home;
