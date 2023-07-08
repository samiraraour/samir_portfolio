import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Projet2.css';


function Projet2() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <Image src="/im1.png" alt="Image 1 du Projet 2" className="image" fluid />
        </Col>
        <Col xs={12} md={4}>
          <Image src="/im2.png" alt="Image 2 du Projet 2" className="image" fluid />
        </Col>
        <Col xs={12} md={4}>
          <Image src="im3.png" alt="Image 3 du Projet 2" className="image" fluid />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h1>Projet 2</h1>
          <p>Description du Projet 2</p>
          <h2>technologies utilisées</h2>
          <ul>
            <li>Technologie 21</li>
            <li>Technologie 22</li>
            <li>Technologie 23</li>
            <li>Technologie 21</li>
            <li>Technologie 22</li>
            <li>Technologie 23</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Projet2;
