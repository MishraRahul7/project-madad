import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
  Spinner,
  Table
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { City, Country, State } from 'country-state-city';

import userImage from '../images/users.png';
import findImage from '../images/find.jpg';
import { fetchUsersRequest } from '../redux/slice/userSlice';

const FindDonor = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [bg, setBloodGroup] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [error, setError] = useState('');

  const stateList = State.getStatesOfCountry('IN');
  const cityList = City.getCitiesOfState('IN', state);
  const bloodGroups = [
    'A+',
    'A-',
    'AB+',
    'AB-',
    'B+',
    'B-',
    'O+',
    'O-',
    'All blood groups'
  ];

  const { users, loading } = useSelector(state => state.user) || {
    users: [],
    loading: false
  };

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  const handleSubmit = () => {
    const payload = {
      state,
      city,
      bloodGroup: bg
    };
    dispatch(fetchUsersRequest(payload));
  };

  const handleSetState = value => {
    setState(value);
    setCity('');
  };

  return (
    <Container>
      <div className='d-flex align-items-center flex-column'>
        <Card
          className='mt-3 mx-3 p-3 d-flex align-items-center justify-content-center'
          style={{ width: '90%' }}>
          <Row className='mb-5'>
            <Col md={3} className='mb-3'>
              <Form.Select
                value={state}
                onChange={e => handleSetState(e.target.value)}>
                <option value=''>State</option>
                {stateList.map((stateItem, index) => (
                  <option key={index} value={stateItem.isoCode}>
                    {stateItem.name}
                  </option>
                ))}
              </Form.Select>
            </Col>

            <Col md={3} className='mb-3'>
              <Form.Select
                value={city}
                onChange={e => setCity(e.target.value)}
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
            <Alert variant='danger' className='text-center w-100'>
              {error}
            </Alert>
          )}

          {loading ? (
            <Col className='text-center my-4'>
              <Spinner animation='border' variant='danger' />
            </Col>
          ) : (
            <Row className='w-100'>
              {users.length > 0 ? (
                users.map((user, idx) => (
                  <Col md={3} sm={6} xs={12} className='mb-4' key={idx}>
                    <Card className=' text-white bg-danger'>
                      <Card.Img
                        variant='top'
                        src={userImage}
                        style={{
                          height: '100px',
                          objectFit: 'contain',
                          paddingTop: '20px'
                        }}
                      />
                      <Card.Body>
                        <Card.Text className='bg-transparent text-white'>
                          <strong>Name:</strong>
                          <br />
                          {user.fullName}
                        </Card.Text>
                        <Card.Text className='bg-transparent text-white'>
                          <strong>Phone:</strong>
                          <br />
                          {user.phone}
                        </Card.Text>

                        <Card.Text className='bg-transparent text-white'>
                          <strong>Blood Group:</strong>
                          <br />
                          {user.bloodGroup}
                        </Card.Text>

                        <Card.Text className='bg-transparent text-white'>
                          <strong>Location:</strong>
                          <br />
                          {user.city}, {user.state}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <Col className='text-center mt-5'>
                  <img
                    src={findImage}
                    alt='No Result Found'
                    style={{ maxWidth: '300px' }}
                  />
                  <h5>Find donors</h5>
                </Col>
              )}
            </Row>
          )}
        </Card>
      </div>
    </Container>
  );
};

export default FindDonor;
