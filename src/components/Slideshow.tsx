import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slideshow.css';
import image from '../assets/homeImg1.png';
import image1 from '../assets/homeimg.jpg';
import image3 from '../assets/homeimg3.jpg';
const Slideshow: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Sikkim</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Innovations in Technology</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Expanding Global Partnerships</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;
