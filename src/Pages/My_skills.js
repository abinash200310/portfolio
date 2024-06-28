import React from "react";
import { Col, Container, Row, Carousel, Card } from "react-bootstrap";
import "../All css/My_skills.css";


import ProgressBar from "react-bootstrap/ProgressBar";

function My_skills() {
  return (
    <div className="" id="my_skills">
      <Container>
        <h1 className=" title_style">SKILLS</h1>
        <h2 className="pb-5 h1color">Front-end & Back-end Technologies:-</h2>
        <div className=" d-flex gap-4 justify-content-center  flex-wrap">
          <Card className="cred_style">
            <Card.Img
              variant="top"
              src="/images/html.png"
              style={{ width: "12rem" }}
              className=" pt-3"
            />
            <Card.Body>
              <Card.Title>HTML</Card.Title>
            </Card.Body>
          </Card>

          <Card className="cred_style">
            <Card.Img
              variant="top"
              src="/images/css.png"
              style={{ width: "12rem" }}
              className=" pt-3"
            />
            <Card.Body>
              <Card.Title>CSS</Card.Title>
            </Card.Body>
          </Card>
          <Card className="cred_style">
            <Card.Img
              variant="top"
              src="/images/js.png"
              style={{ width: "12rem" }}
              className=" pt-3"
            />
            <Card.Body>
              <Card.Title>JAVASCRIPT</Card.Title>
            </Card.Body>
          </Card>
          <Card className="cred_style">
            <Card.Img
              className=" pb-4 pt-4"
              variant="top"
              src="/images/bootstrap.png"
              style={{ width: "12rem" }}
            />
            <Card.Body>
              <Card.Title>BOOTSTRAP</Card.Title>
            </Card.Body>
          </Card>

          <Card className="cred_style">
            <Card.Img
              variant="top"
              src="/images/react bootstrap.png"
              style={{ width: "12rem" }}
              className=" pt-3"
            />
            <Card.Body>
              <Card.Title>REACR BOOTSTRAP</Card.Title>
            </Card.Body>
          </Card>
          <Card className="cred_style">
            <Card.Img
              variant="top"
              src="/images/react.png"
              style={{ width: "12rem" }}
            />
            <Card.Body>
              <Card.Title>REACR</Card.Title>
            </Card.Body>
          </Card>
          <Card className="cred_style">
            <Card.Img
              variant="top"
              src="/images/node.png"
              style={{ width: "12rem" }}
              className=" pt-3  pb-3"
            />
            <Card.Body>
              <Card.Title>NODE JS</Card.Title>
            </Card.Body>
          </Card>
          <Card className="cred_style">
            <Card.Img
              variant="top"
              src="/images/mongo db.png"
              style={{ width: "12rem" }}
            />
            <Card.Body>
              <Card.Title>MONGO DB</Card.Title>
            </Card.Body>
          </Card>
        </div>
        {/* <div className="box  m-5">
          <Row>
            <Col className="">
              <h1 className=" pb-3">Others</h1>
              <div className=" d-flex flex-wrap gap-3 justify-content-center ">
              <Card border="info" style={{ width: "12rem"  }} className="Others">
                  <Card.Body>
                    <Card.Img variant="top" src="/images/vs code.png" />
                  </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }} className="Others">
                  <Card.Body>
                    <Card.Img variant="top" src="/images/githup.png" />
                  </Card.Body>
                </Card>
                <Card
                  border="info"
                  style={{ width: "18rem" }}
                  className="Others"
                >
                  <Card.Body>
                    <Card.Img variant="top" src="/images/word1.png" />
                  </Card.Body>
                </Card>
                <Card
                  border="info"
                  style={{ width: "18rem" }}
                  className="Others"
                >
                  <Card.Body>
                    <Card.Img variant="top" src="/images/excel.png" />
                  </Card.Body>
                </Card>
                <Card
                  border="info"
                  style={{ width: "18rem" }}
                  className="Others"
                >
                  <Card.Body>
                    <Card.Img variant="top" src="/images/power bi.png" />
                  </Card.Body>
                </Card>
                <Card
                  border="info"
                  style={{ width: "18rem" }}
                  className="Others"
                >
                  <Card.Body>
                    <Card.Img variant="top" src="/images/powerpoint.png" />
                  </Card.Body>
                </Card>
                <Card
                  border="info"
                  style={{ width: "18rem" }}
                  className="Others"
                >
                  <Card.Body>
                    <Card.Img variant="top" src="/images/canva.png" />
                  </Card.Body>
                </Card>
                <Card
                  border="info"
                  style={{ width: "18rem" }}
                  className="Others"
                >
                  <Card.Body>
                    <Card.Img variant="top" src="/images/DV.png" />
                  </Card.Body>
                </Card>
                <Card
                  border="info"
                  style={{ width: "18rem" }}
                  className="Others"
                >
                  <Card.Body>
                    <Card.Img variant="top" src="/images/pm.png" />
                  </Card.Body>
                </Card>
                <Card
                  border="info"
                  style={{ width: "18rem" }}
                  className="Others"
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src="/images/filmora.png"
                      className=" pt-5"
                    />
                  </Card.Body>
                </Card>
                <Card
                  border="info"
                  style={{ width: "18rem" }}
                  className="Others"
                >
                  <Card.Body>
                    <Card.Img variant="top" src="/images/AM.png" />
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </div> */}

        <h2 className="h1color">Other Technologies :-</h2>
        <div className="abi">
          <Row>
            <Col>
              <div className="dell align-items-center">
                <img className="bot" src="/images/githup.png" width={150} />
                <img
                  className="bot"
                  src="/images/word1.png"
                  width={200}
                  height={150}
                />
                <img className="bot" src="/images/excel.png" width={150} />
                <img className="bot" src="/images/power bi.png" width={150} />
                <img className="bot" src="/images/canva.png" width={150} />
                <img className="bot" src="/images/vs code.png" width={150} />

                <img className="bot" src="/images/DV.png" width={150} />
                <img className="bot" src="/images/pm.png" width={150} />
                <img className="bot" src="/images/filmora.png" width={150} />
                <img className="bot" src="/images/AM.png" width={150} />
                <img className="bot" src="/images/powerpoint.png" width={130} />
              </div>
            </Col>
          </Row>
        </div>
        <h2 className="h1color pb-5">Project :-</h2>
        <div>
          <Row className="pb-5  gap-5" >
            <Col className="project_style">
           <a href="https://github.com/abinash200310/Student-Managenemt-System"> <h4 className="project_title">Student management system</h4></a>
              <Carousel data-bs-theme="dark">
               
                <Carousel.Item>
                  <img
                    className="d-block  w-75"
                    src="/images/1.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/2.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/3.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/4.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/5.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/6.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/7.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/8.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/9.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/10.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/11.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/12.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/13.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/14.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/15.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/16.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/17.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/18.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/19.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/20.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75 "
                    src="/images/21.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
        
            <Col className="project_style">
            <h4 className="project_title">API CRUD Operations</h4>
              <Carousel data-bs-theme="dark">
              <Carousel.Item>
                  <img
                    className="d-block  w-75 "
                    src="/images/22.png"
                    alt="First slide"
                    
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block  w-75"
                    src="/images/23.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block  w-75"
                    src="/images/24.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block  w-75"
                    src="/images/25.png"
                    alt="First slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </div>
        <div className="slider-container">
     
    </div>
      </Container>
    </div>
    
  );
}

export default My_skills;
