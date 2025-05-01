import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { getUser, deleteUser } from "../actions";
const data = {
  fname: "John", // First Name
  lname: "Doe", // Last Name
  ftrname: "Richard Doe", // Father's Name
  dob: "1990-01-01", // Date of Birth
  age: 34, // Age
  weight: "75kg", // Weight
  gender: "Male", // Gender
  occupation: "Engineer", // Occupation
  bgroup: "O+", // Blood Group
  phone: "1234567890", // Phone
  email: "john.doe@example.com", // Email
  address: "123 Main Street, City Center", // Address
  city: "New York", // City
  states: "New York" // State
};

const Profile = () => {
  const [loading, setLoading] = useState(false);
  //   const data = useSelector(state => state.auth.user);
  //   const isSignedIn = useSelector(state => state.auth.isSignedIn);

  return (
    <Container className='py-5'>
      <Card className='shadow-lg rounded p-4'>
        <h2 className='text-center mb-4'>Your Profile</h2>
        <Row className='mb-3'>
          <Col md={6} className='mb-2'>
            <strong>Name:</strong> {`${data.fname} ${data.lname}`}
          </Col>
          <Col md={6} className='mb-2'>
            <strong>Father's Name:</strong> {data.ftrname}
          </Col>
          <Col md={6} className='mb-2'>
            <strong>Date of Birth:</strong> {data.dob}
          </Col>
          <Col md={6} className='mb-2'>
            <strong>Age:</strong> {data.age}
          </Col>
          <Col md={6} className='mb-2'>
            <strong>Weight:</strong> {data.weight}
          </Col>
          <Col md={6} className='mb-2'>
            <strong>Gender:</strong> {data.gender}
          </Col>
          <Col md={6} className='mb-2'>
            <strong>Occupation:</strong> {data.occupation}
          </Col>
          <Col md={6} className='mb-2'>
            <strong>Blood Group:</strong> {data.bgroup}
          </Col>
          <Col md={6} className='mb-2'>
            <strong>Phone:</strong> {data.phone}
          </Col>
          <Col md={6} className='mb-2'>
            <strong>Email:</strong> {data.email}
          </Col>
          <Col md={12} className='mb-2'>
            <strong>Address:</strong>{" "}
            {`${data.address}, ${data.city}, ${data.states}`}
          </Col>
        </Row>

        <div className='text-end'>
          <Button variant='danger' disabled={loading}>
            Delete
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default Profile;
