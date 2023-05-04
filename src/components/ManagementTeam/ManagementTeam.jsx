import React from "react";
import "./ManagementTeam.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import faceMaskImg from "../../asset/images/management_img/facee.png";

import { Link } from "react-router-dom";
import BoardOfDirector from "../BoardOfDirector/BoardOfDirector";
import profile1Img from "../../asset/images/About us/profile.jpg";
import profile2Img from "../../asset/images/About us/avatar.jpg";
import profile3Img from "../../asset/images/About us/avatarFemale.png";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import { AiFillGooglePlusCircle } from "react-icons/ai";

const ManagementTeam = () => {
  return (
    <>
      {/* <h2 className="mainTitle">Board of Directors</h2> */}
      {/* <Container>
        <Row style={{ marginTop: "5rem" }}>
          <Col lg={6} md={6} sm={12}>
            <Link to={`/about/chairman-message`}>
              <Card className="imageCard">
                <Card.Img
                  className="photoCard"
                  style={{ height: "350px" }}
                  variant="top"
                  src={profile2Img}
                />
                <Card.Body className="text-center">
                  <h2 className="managementName">
                    ALHAJ MD NURUL ISLAM TALUKDER
                  </h2>
                  <p className="managementDesignation">CHAIRMAN</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col lg={6} md={6} sm={12}>
            <Link to={`/about/md-message`}>
              <Card className="imageCard">
                <Card.Img
                  style={{ height: "350px" }}
                  variant="top"
                  src={profile2Img}
                />
                <Card.Body className="text-center">
                  <h2 className="managementName">MR MD SAMSUL ARIFIN</h2>
                  <p className="managementDesignation">MANAGING DIRECTOR </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
        </Container> */}

      {/* <Row style={{ marginTop: "2rem" }}>
          <Col lg={3} md={3} sm={6}>
            <Card className="imageCard">
              <Card.Img variant="top" src={faceMaskImg} />
              <Card.Body className="text-center">
                <h2 className="managementName">MR MD SAMSUL ABEDIN</h2>
                <p className="managementDesignation">Director</p>
                <p className="managementTeamBio">
                  An MBA from a reputed university in Dhaka, Mr Md Samsul Abedin
                  is one of the directors in Talukder Group of Industries who
                  engaged in strengthening Brand image of the Group.
                </p>
      
                <Link
                  to={`/about/Message/Details?title=${"MR MD SAMSUL ABEDIN"}&subTitle=${"Director"}`}
                >
                  <Button variant="outline-info">Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={3} sm={6}>
            <Card className="imageCard">
              <Card.Img variant="top" src={faceMaskImg} />
              <Card.Body className="text-center">
                <h2 className="managementName">MR MD SAMSUL SALEHIN </h2>
                <p className="managementDesignation">Director</p>
                <p className="managementTeamBio">
                  An MBA from a reputed university in Dhaka, Mr Md Samsul
                  Salehin is one of the directors in Talukder Group of
                  Industries who is working with full devotion in Market Survey
                  that give foundation of new opportunity.
                </p>
                <Link
                  to={`/about/Message/Details?title=${"MR MD SAMSUL SALEHIN"}&subTitle=${"Director"}`}
                >
                  <Button variant="outline-info">Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={3} sm={6}>
            <Card
              className="imageCard"
            >
              <Card.Img variant="top" src={faceMaskImg} />
              <Card.Body className="text-center">
                <h2 className="managementName">Mrs. Shaila Akter</h2>
                <p className="managementDesignation">
                  Chief Executive Officer (CEO)
                </p>
                <p className="managementTeamBio">
                  After completion MBA from Stamford University Mrs. Shaila
                  Akter hold the position of Chief Executive Officer (CEO) of
                  this organization. Mrs. Shaila Akter very successfully
                  transformed herself to Business Leader.
                </p>
                <Link
                  to={`/about/Message/Details?title=${"Mrs. Shaila Akter"}&subTitle=${" Chief Executive Officer (CEO)"}`}
                >
                  <Button variant="outline-info">Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={3} sm={6}>
            <Card
              className="imageCard"
            >
              <Card.Img variant="top" src={faceMaskImg} />
              <Card.Body className="text-center">
                <h2 className="managementName">Mrs.Ferdausi Akter</h2>
                <p className="managementDesignation">
                  Deputy Managing Director
                </p>
                <p className="managementTeamBio">
                  A proven Public Servant with a clean & colorful professional
                  track record who is now enriching and adding in Core Corporate
                  values to the Group. By virtue of her pleasant personality,
                  she became the mark of organizational integrity, contributing
                  in developing policy for each operational segment, formulating
                  strategic policy in attaining organizational objectives.
                </p>
                <Link
                  to={`/about/Message/Details?title=${"Mrs.Ferdausi Akter"}&subTitle=${"Deputy Managing Director"}`}
                >
                  <Button variant="outline-info">Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}

      <div className="profile-area">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="card">
                <div className="img11">
                  <img src={profile1Img} alt="one img" />
                </div>

                <div className="img12">
                  <img src={profile2Img} alt="two img" />
                </div>

                <div className="main-text">
                  <h2> ALHAJ MD NURUL ISLAM TALUKDER</h2>
                  <p className="main-text-p">CHAIRMAN</p>
                  <Link to={`/about/chairman-message`}>
                    <Button className="profileBtn" variant="outline-info">
                      Details
                    </Button>
                  </Link>
                </div>

                <div className="socials" style={{ fontSize: "25px" }}>
                  <BsFacebook style={{ marginRight: "5px" }} />
                  <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                  <GrPinterest style={{ marginRight: "5px" }} />
                  <AiFillGooglePlusCircle />
                </div>
              </div>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <div className="card">
                <div className="img11">
                  <img src={profile1Img} alt="one img" />
                </div>

                <div className="img12">
                  <img src={profile2Img} alt="two img" />
                </div>

                <div className="main-text">
                  <h2>MR MD SAMSUL ARIFIN</h2>
                  <p className="main-text-p">MANAGING DIRECTOR</p>
                  <Link to={`/about/md-message`}>
                    <Button className="profileBtn" variant="outline-info">
                      Details
                    </Button>
                  </Link>
                </div>

                <div className="socials" style={{ fontSize: "25px" }}>
                  <BsFacebook style={{ marginRight: "5px" }} />
                  <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                  <GrPinterest style={{ marginRight: "5px" }} />
                  <AiFillGooglePlusCircle />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 4 col */}

      <div className="profile-area">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="card">
                <div className="img1">
                  <img src={profile1Img} alt="one img" />
                </div>

                <div className="img2">
                  <img src={profile2Img} alt="two img" />
                </div>

                <div className="main-text">
                  <h2>MR MD SAMSUL ABEDIN</h2>
                  <p className="main-text-p">Director</p>
                  <Link
                    to={`/about/Message/Details?title=${"MR MD SAMSUL ABEDIN"}&subTitle=${"Director"}`}
                  >
                    <Button className="profileBtn" variant="outline-info">
                      Details
                    </Button>
                  </Link>
                </div>

                <div className="socials" style={{ fontSize: "25px" }}>
                  <BsFacebook style={{ marginRight: "5px" }} />
                  <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                  <GrPinterest style={{ marginRight: "5px" }} />
                  <AiFillGooglePlusCircle />
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <div className="card">
                <div className="img1">
                  <img src={profile1Img} alt="one img" />
                </div>

                <div className="img2">
                  <img src={profile2Img} alt="two img" />
                </div>

                <div className="main-text">
                  <h2>MR MD SAMSUL SALEHIN</h2>
                  <p className="main-text-p">Director</p>
                  <Link
                    to={`/about/Message/Details?title=${"MR MD SAMSUL SALEHIN"}&subTitle=${"Director"}`}
                  >
                    <Button className="profileBtn" variant="outline-info">
                      Details
                    </Button>
                  </Link>
                </div>

                <div className="socials" style={{ fontSize: "25px" }}>
                  <BsFacebook style={{ marginRight: "5px" }} />
                  <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                  <GrPinterest style={{ marginRight: "5px" }} />
                  <AiFillGooglePlusCircle />
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <div className="card">
                <div className="img1">
                  <img src={profile1Img} alt="one img" />
                </div>

                <div className="img2">
                  <img src={profile3Img} alt="two img" />
                </div>

                <div className="main-text">
                  <h2>Mrs. Shaila Akter</h2>
                  <p style={{ fontSize: "13px" }} className="main-text-p">
                    Chief Executive Officer (CEO)
                  </p>
                  <Link
                    to={`/about/Message/Details?title=${"Mrs. Shaila Akter"}&subTitle=${" Chief Executive Officer (CEO)"}`}
                  >
                    <Button className="profileBtn" variant="outline-info">
                      Details
                    </Button>
                  </Link>
                </div>

                <div className="socials" style={{ fontSize: "25px" }}>
                  <BsFacebook style={{ marginRight: "5px" }} />
                  <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                  <GrPinterest style={{ marginRight: "5px" }} />
                  <AiFillGooglePlusCircle />
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <div className="card">
                <div className="img1">
                  <img src={profile1Img} alt="one img" />
                </div>

                <div className="img2">
                  <img src={profile3Img} alt="two img" />
                </div>

                <div className="main-text">
                  <h2>Mrs. Ferdausi Akter</h2>
                  <p className="main-text-p"> Deputy Managing Director</p>
                  <Link
                    to={`/about/Message/Details?title=${"Mrs.Ferdausi Akter"}&subTitle=${"Deputy Managing Director"}`}
                  >
                    <Button className="profileBtn" variant="outline-info">
                      Details
                    </Button>
                  </Link>
                </div>

                <div className="socials" style={{ fontSize: "25px" }}>
                  <BsFacebook style={{ marginRight: "5px" }} />
                  <AiFillTwitterCircle style={{ marginRight: "5px" }} />
                  <GrPinterest style={{ marginRight: "5px" }} />
                  <AiFillGooglePlusCircle />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ManagementTeam;
