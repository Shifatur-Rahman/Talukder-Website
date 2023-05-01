import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./Slider.css";
import slider1 from "../../asset/images/Slider_Img/slider1.jpg";

const Slider = () => {
  const images = [
    {
      src:  slider1 ,
      alt: "House Hold Products",
      para: "Better Design & Right Choice For Kitchen",
    },
    {
      src: "https://www.shutterstock.com/image-photo/two-woman-communicate-their-friends-600w-2185303771.jpg",
      alt: "Talukder Plastic Factory",
      para: "OUR BRAND IS YOURS",
    },
    {
      src: "https://www.shutterstock.com/image-photo/young-beautiful-woman-watching-tv-600w-387198259.jpg",
      alt: "Talukder Products Best In Quality",
      para: "FOR QUALITY LIFE",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3); // Change the image after every 2 seconds
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    // <Carousel activeIndex={index} onSelect={setIndex}>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://www.shutterstock.com/image-photo/baseball-team-smiling-by-chain-600w-2215700015.jpg"
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://www.shutterstock.com/image-photo/two-woman-communicate-their-friends-600w-2185303771.jpg"
    //       alt="Second slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://www.shutterstock.com/image-photo/young-beautiful-woman-watching-tv-600w-387198259.jpg"
    //       alt="Third slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>

    <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={2000}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <CSSTransition
            in={activeIndex === index}
            timeout={300}
            classNames="fade"
          >
            <img className="d-block w-100" src={image.src} alt={image.alt} />
          </CSSTransition>
          <Carousel.Caption>
            <h3>{image.alt}</h3>
            <p>{image.para}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
