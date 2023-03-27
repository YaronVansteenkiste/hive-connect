import React, { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import './login.css'

const Login  = ()=> {
  

  const [inputs, setInputs] = useState ( {
    username:"",  
    password: ""
  })

  const [err, setErr] = useState (null);

  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value }));
  }

  const handleClick = async e=> {
    e.preventDefault()

    try {
      await axios.post("http://localhost:8800/api/auth/login", inputs)
    } catch (err) {
      setErr(err);
    }
  }

  console.log(err);

  function goHome() {
    window.location='/';
  }

//bijleren usestate




  return (
      <div>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            
            <Col md={8} lg={6} xs={12}>
              <Card>
                <Card.Body className='accountform'>
                  <div className="mb-3 mt-md-4">
                  <h5 className="logo" onClick={goHome}>Hive</h5>
                    <div>
                      <Form>
                      <Form.Group className="mb-3" controlId="Username">
                          <Form.Label className="text-center">Username</Form.Label>
                          <Form.Control type="text" placeholder="Enter Username" name='username'onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Password">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" name='password'onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        ></Form.Group>
                        <div className="d-grid">
                          <Button onClick={handleClick} variant="primary" type="submit">
                            Sign in
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Don't have an account?{' '}
                          <a href="/register" className="text-primary fw-bold">
                            Sign up
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Login;