import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../All css/About.css";

function About() {
  return (
    <div className="mainbg d-flex justify-content-center align-items-center " id="about">
      <Container>
        <Row className="pt-5 d-flex  center gap-5 ">
          <Col className=" fs-5 d-flex justify-content-center align-items-center ">
            <p>
              <h4 className="highlight pt-2 gap-5 ">
                Junior Web Developer with Full-Stack Specialization
              </h4>
              <p className="style">
                I am a Recent graduate with a degree from Annamalai University,
                specializing in full-stack development. As a junior web
                developer, I bring a strong foundation in web technologies and a
                hands-on approach gained through my final year project on
                Students Management and Job Tracker. Collaborating with a
                dynamic team of four members, we successfully implemented the
                'Naan Muthalvan' project within a six-month timeframe. Eager to
                contribute my skills and continue learning in a full-time role.
                Let's connect and explore opportunities together.
              </p>
            </p>
          </Col>

          <Col className=" d-flex justify-content-center align-items-center  ">
            <img
              src="/images/abinash.jpg "
              width={300}
              className="  shado rounded-4"
            />
          </Col>
        </Row>
   
      </Container><hr/>
      
    </div>
  );
}

export default About;
