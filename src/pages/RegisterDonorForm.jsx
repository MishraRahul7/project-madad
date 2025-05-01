import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import midImage from '../images/mid.png';
import { City, Country, State } from 'country-state-city';

const RegisterDonorForm = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const stateList = State.getStatesOfCountry('IN');
  const cityList = City.getCitiesOfState('IN', state);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    console.log('Form Data:', data);
    // You can dispatch your register donor action here
  };

  const handleSetState = value => {
    setState(value);
    setCity(''); // Reset city if state changes
  };

  const handleSetCity = value => {
    setCity(value);
  };
  return (
    <div className='container-fluid layout-content d-flex align-items-center flex-column'>
      {/* <h2 className='text-center mb-4'>Register as a Blood Donor</h2>
      <div className='text-center mb-4'>
        <img src={midImage} alt='Mid Decoration' style={{ height: '40px' }} />
      </div> */}
      <Card
        className='mt-3 mx-3 p-3 d-flex justify-content-center'
        style={{ width: '70%' }}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter full name'
                  {...register('fullName', { required: true })}
                />
                {errors.fullName && (
                  <span className='text-danger'>Full Name is required</span>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Father's Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder="Enter father's name"
                  {...register('fatherName', { required: true })}
                />
                {errors.fatherName && (
                  <span className='text-danger'>Father's Name is required</span>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <span className='text-danger'>Email is required</span>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter phone number'
                  {...register('phone', { required: true })}
                />
                {errors.phone && (
                  <span className='text-danger'>Phone number is required</span>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type='date'
                  {...register('dob', { required: true })}
                />
                {errors.dob && (
                  <span className='text-danger'>Date of Birth is required</span>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Gender</Form.Label>
                <Form.Select {...register('gender', { required: true })}>
                  <option value=''>Select gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Other'>Other</option>
                </Form.Select>
                {errors.gender && (
                  <span className='text-danger'>Gender is required</span>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Blood Group</Form.Label>
                <Form.Select {...register('bloodGroup', { required: true })}>
                  <option value=''>Select Blood Group</option>
                  <option value='A+'>A+</option>
                  <option value='A-'>A-</option>
                  <option value='B+'>B+</option>
                  <option value='B-'>B-</option>
                  <option value='AB+'>AB+</option>
                  <option value='AB-'>AB-</option>
                  <option value='O+'>O+</option>
                  <option value='O-'>O-</option>
                </Form.Select>
                {errors.bloodGroup && (
                  <span className='text-danger'>Blood group is required</span>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Weight (kg)</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Enter weight'
                  {...register('weight', { required: true })}
                />
                {errors.weight && (
                  <span className='text-danger'>Weight is required</span>
                )}
              </Form.Group>
            </Col>

            {/* <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Occupation</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter occupation'
                  {...register('occupation')}
                />
              </Form.Group>
            </Col> */}
          </Row>
          <Row>
            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type='text'
                  // rows={2}
                  placeholder='Enter address'
                  {...register('address', { required: true })}
                />
                {errors.address && (
                  <span className='text-danger'>Address is required</span>
                )}
              </Form.Group>
            </Col>
            <Col md={4} className='mb-3'>
              <Form.Label>State</Form.Label>

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
            <Col md={4} className='mb-3'>
              <Form.Label>City</Form.Label>

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
          </Row>
          <Row>
            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter password'
                  {...register('password', { required: true, minLength: 6 })}
                />
                {errors.password && (
                  <span className='text-danger'>
                    Password must be at least 6 characters
                  </span>
                )}
              </Form.Group>
            </Col>{' '}
          </Row>
          <Row>
            <Col md={12} className='text-center'>
              <Button variant='primary' type='submit'>
                Register
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default RegisterDonorForm;
