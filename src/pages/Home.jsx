import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import NewsCard from "../container/NewsCard";
import ProcessCard from "../container/ProcessCard";
import HeaderImage from "../images/headerImage3.png";
import midImage from "../images/mid.png";

const processSteps = [
  {
    heading: "REGISTRATION",
    body: "Complete a simple registration form with required details.",
    img: "https://templates.bwlthemes.com/blood_donation/images/process_1.jpg"
  },
  {
    heading: "SCREENING",
    body: "A drop of blood is taken to ensure iron levels are adequate.",
    img: "https://templates.bwlthemes.com/blood_donation/images/process_2.jpg"
  },
  {
    heading: "DONATION",
    body: "After passing screening, donation takes 6-10 minutes.",
    img: "https://templates.bwlthemes.com/blood_donation/images/process_3.jpg"
  },
  {
    heading: "REFRESHMENT",
    body: "Stay in the seating area and enjoy a complimentary drink.",
    img: "https://templates.bwlthemes.com/blood_donation/images/process_4.jpg"
  }
];

const Home = () => {
  return (
    <>
      {/* Header Image */}
      <div
        style={{
          height: "95vh",
          width: "100%",
          backgroundImage: `url(${HeaderImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        className='d-none d-sm-block'
      />

      {/* Donation Process */}
      <Container className='py-5'>
        <h4 className='text-center text-uppercase mb-3'>Donation Process</h4>
        <div className='text-center mb-4'>
          <Image src={midImage} alt='middleImage' style={{ height: "4vh" }} />
        </div>
        <Row>
          {processSteps.map((step, index) => (
            <Col xs={12} sm={6} md={3} key={index}>
              <ProcessCard
                heading={step.heading}
                body={step.body}
                img={step.img}
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Donation Campaigns */}
      <Container className='pb-5'>
        <h4 className='text-center text-uppercase mb-3'>Donation Campaigns</h4>
        <div className='text-center mb-4'>
          <Image src={midImage} alt='middleImage' style={{ height: "4vh" }} />
        </div>
        <Row>
          {[...Array(6)].map((_, index) => (
            <Col xs={12} sm={6} md={4} key={index}>
              <NewsCard heading={`News ${index + 1}`} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Home;
