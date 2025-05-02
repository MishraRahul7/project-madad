import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import midImage from '../images/mid.png';
import { City, Country, State } from 'country-state-city';
import { useDispatch } from 'react-redux';
import { registerDonorRequest } from '../../src/redux/slice/donorSlice';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RegisterDonorForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    const finalData = { ...data, state, city };
    dispatch(registerDonorRequest(finalData));
    setTimeout(() => {
      navigate('/find-donor');
    }, 800);
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
                  {...register('fullName', {
                    required: 'Full Name is required'
                  })}
                />
                {errors.fullName && (
                  <span className='text-danger'>{errors.fullName.message}</span>
                )}
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Father's Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder="Enter father's name"
                  {...register('fatherName', {
                    required: "Father's Name is required"
                  })}
                />
                {errors.fatherName && (
                  <span className='text-danger'>
                    {errors.fatherName.message}
                  </span>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && (
                  <span className='text-danger'>{errors.email.message}</span>
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
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: 'Invalid phone number'
                    }
                  })}
                />
                {errors.phone && (
                  <span className='text-danger'>{errors.phone.message}</span>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type='date'
                  {...register('dob', {
                    required: 'Date of Birth is required'
                  })}
                />
                {errors.dob && (
                  <span className='text-danger'>{errors.dob.message}</span>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  {...register('gender', { required: 'Gender is required' })}>
                  <option value=''>Select gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Other'>Other</option>
                </Form.Select>
                {errors.gender && (
                  <span className='text-danger'>{errors.gender.message}</span>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Blood Group</Form.Label>
                <Form.Select
                  {...register('bloodGroup', {
                    required: 'Blood group is required'
                  })}>
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
                  <span className='text-danger'>
                    {errors.bloodGroup.message}
                  </span>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Weight (kg)</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Enter weight'
                  {...register('weight', {
                    required: 'Weight is required',
                    min: {
                      value: 45,
                      message: 'Minimum eligible weight is 45kg'
                    }
                  })}
                />
                {errors.weight && (
                  <span className='text-danger'>{errors.weight.message}</span>
                )}
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Occupation</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter occupation'
                  {...register('occupation')}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter address'
                  {...register('address', { required: 'Address is required' })}
                />
                {errors.address && (
                  <span className='text-danger'>{errors.address.message}</span>
                )}
              </Form.Group>
            </Col>

            <Col md={4} className='mb-3'>
              <Form.Label>State</Form.Label>
              <Form.Select
                value={state}
                onChange={e => handleSetState(e.target.value)}
                required>
                <option value=''>State</option>
                {stateList.map((state, index) => (
                  <option key={index} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </Form.Select>
              {!state && <span className='text-danger'>State is required</span>}
            </Col>

            <Col md={4} className='mb-3'>
              <Form.Label>City</Form.Label>
              <Form.Select
                value={city}
                onChange={e => handleSetCity(e.target.value)}
                disabled={!state}
                required>
                <option value=''>City</option>
                {cityList.map((c, index) => (
                  <option key={index} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </Form.Select>
              {!city && <span className='text-danger'>City is required</span>}
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter password'
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
                      message: 'Must include uppercase letter and number'
                    }
                  })}
                />
                {errors.password && (
                  <span className='text-danger'>{errors.password.message}</span>
                )}
              </Form.Group>
            </Col>
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
      <ToastContainer />
    </div>
  );
};
export default RegisterDonorForm;
