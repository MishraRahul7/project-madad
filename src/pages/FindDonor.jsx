import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { City, Country, State } from "country-state-city";

// import { getAllUser, filteredData } from "../actions";
import userImage from "../images/users.png";
import midImage from "../images/mid.png";
import noResultImage from "../images/no_result.png"; // <-- Assume you have a vector image for "no result"
import findImage from "../images/find.jpg"; // <-- Assume you have a vector image for "no result"

const FindDonor = () => {
  const dispatch = useDispatch();
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [bg, setBloodGroup] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [error, setError] = useState("");

  const stateList = State.getStatesOfCountry("IN");
  const cityList = City.getCitiesOfState("IN", state);
  const bloodGroups = [
    "A+",
    "A-",
    "AB+",
    "AB-",
    "B+",
    "B-",
    "O+",
    "O-",
    "All blood groups"
  ];

  const users = useSelector(state => state.auth.users) || [];

  useEffect(() => {
    // dispatch(getAllUser());
  }, [dispatch]);

  const handleSubmit = () => {
    setError("");

    // Validation
    if (!state || !city || !bg) {
      setError("Please select State, City and Blood Group.");
      setFilteredUsers([]);
      return;
    }

    const { name: regionName } = State.getStateByCode(region) || {};

    const filtered = users.filter(
      user =>
        (user.states === regionName || user.city === city) &&
        (user.bgroup === bg || bg === "All blood groups")
    );

    setFilteredUsers(filtered);
  };

  const handleSetState = value => {
    setState(value);
    setCity(""); // Reset city if state changes
  };

  const handleSetCity = value => {
    setCity(value);
  };

  return (
    <Container>
      <div className='d-flex align-items-center flex-column'>
        {/* <div>
          <h5 className='text-center mb-4'>Find Blood Donor</h5>
          <div className='text-center mb-4'>
            <img src={midImage} alt='Mid Decoration' style={{ height: "40px" }} />
          </div>
        </div> */}
        <Card
          className='mt-3 mx-3 p-3 d-flex align-items-center justify-content-center'
          style={{ width: "70%" }}>
          <Row className='mb-5'>
            <Col md={3} className='mb-3'>
              <Form.Select
                value={state}
                onChange={e => handleSetState(e.target.value)}>
                <option value=''>State</option>
                {stateList.map((state, index) => (
                  <option key={index} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </Form.Select>
            </Col>

            <Col md={3} className='mb-3'>
              <Form.Select
                value={city}
                onChange={e => handleSetCity(e.target.value)}
                disabled={!state}>
                <option value=''>City</option>
                {cityList.map(c => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </Form.Select>
            </Col>

            <Col md={3} className='mb-3'>
              <Form.Select
                value={bg}
                onChange={e => setBloodGroup(e.target.value)}>
                <option value=''>Blood Group</option>
                {bloodGroups.map(group => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </Form.Select>
            </Col>

            <Col md={3} className='mb-3'>
              <Button variant='danger' className='w-100' onClick={handleSubmit}>
                SEARCH
              </Button>
            </Col>
          </Row>

          {error && (
            <Alert variant='danger' className='text-center'>
              {error}
            </Alert>
          )}

          <Row>
            {filteredUsers.length > 0
              ? filteredUsers.map((user, idx) => (
                <Col md={3} sm={6} xs={12} className='mb-4' key={idx}>
                  <Card className='h-100 text-white bg-danger'>
                    <Card.Img
                      variant='top'
                      src={userImage}
                      style={{
                        height: "200px",
                        objectFit: "contain",
                        paddingTop: "20px"
                      }}
                    />
                    <Card.Body>
                      <Card.Text>
                        <strong>Name:</strong>
                        <br />
                        {user.fname} {user.lname}
                      </Card.Text>
                      <Card.Text>
                        <strong>Phone:</strong>
                        <br />
                        {user.phone}
                      </Card.Text>
                      <Card.Text>
                        <strong>Blood Group:</strong>
                        <br />
                        {user.bgroup}
                      </Card.Text>
                      <Card.Text>
                        <strong>Region:</strong>
                        <br />
                        {user.city}, {user.states}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
              : !error && (
                <Col className='text-center mt-5'>
                  <img
                    src={findImage}
                    alt='No Result Found'
                    style={{ maxWidth: "300px" }}
                  />
                  <h5>Find donors</h5>
                </Col>
                // <Col className='text-center my-5'>
                //   <img
                //     src={noResultImage}
                //     alt='No Result Found'
                //     style={{ maxWidth: "300px", marginBottom: "20px" }}
                //   />
                //   <h5>No donors found matching your criteria!</h5>
                // </Col>
              )}
          </Row>
        </Card>
      </div>
    </Container>
  );
};

export default FindDonor;
