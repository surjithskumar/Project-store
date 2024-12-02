import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import titleImage from '../assets/images/img1-home.gif';
import ProjectCard from '../Components/ProjectCard';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid bg-info rounded py-5">
        <Container>
          <Row className="align-items-center g-4">
            <Col xs={12} md={6}>
              <h1 className="display-4 fw-bold text-light mt-3">
                <i className="fa-solid fa-list-check me-2"></i>Project-Fair
              </h1>
              <p className="text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, ipsa repellendus, necessitatibus voluptatibus
                veritatis itaque reprehenderit beatae vitae similique dicta
                minus ullam, assumenda illum. Dolorem tenetur quas maiores ipsam
                saepe.
              </p>
              <Link to={'/login'} className="btn btn-dark mt-3">
                Start to Explore
              </Link>
            </Col>
            <Col xs={12} md={6} className="text-center">
              <img
                src={titleImage}
                className="img-fluid"
                alt="Title"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* All Projects Section */}
      <div className="allProjects mt-5">
        <h1 className="text-center text-primary fw-bolder">
          Explore Your Projects
        </h1>
        <div className="container overflow-auto py-4">
          <marquee scrollAmount={15}>
            <Row className="g-4">
              <Col xs={12} sm={6} lg={4}>
                <ProjectCard />
              </Col>
              <Col xs={12} sm={6} lg={4}>
                <ProjectCard />
              </Col>
              <Col xs={12} sm={6} lg={4}>
                <ProjectCard />
              </Col>
            </Row>
          </marquee>
        </div>
      </div>
    </>
  );
};

export default Home;