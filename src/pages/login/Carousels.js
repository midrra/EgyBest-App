import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Carousels() {
  return (
    <Carousel>
      <Carousel.Item
        style={{
          height: "90vh",
          width: "100%",
        }}
      >
        <img
          src={"photes/input-1.jpg"}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "20px 0px 0px 20px",
          }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        style={{
          height: "90vh",
          width: "100%",
        }}
      >
        <img
          src={"photes/input-1.jpg"}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "20px 0px 0px 20px",
          }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
