import React, { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import axios from 'axios';

const Register  = ()=> {
  const [inputs, setInputs] = useState ( {
    username:"",  
    email: "",
    password: "",
    name: ""
  })

  const [err, setErr] = useState (null);

  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value }));
  }

  const handleClick = async e=> {
    e.preventDefault()

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs)
    } catch (err) {
      setErr(err);
    }
  }

  console.log(err);

//bijleren usestate


  return (
      <div>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            
            <Col md={8} lg={6} xs={12}>
              <Card className="px-4">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                      Hive
                    </h2>
                    <div className="mb-3">
                      <Form>
                      <Form.Group className="mb-3" controlId="Username">
                          <Form.Label className="text-center">Username</Form.Label>
                          <Form.Control type="text" placeholder="Enter Username" name='username'onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Name">
                          <Form.Label className="text-center">Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter Name" name='name'onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control type="email" placeholder="Enter email" name='email'onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" name='password'onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        ></Form.Group>
                        <div className="d-grid">
                          <Button onClick={handleClick} variant="primary" type="submit">
                            Create Account
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Already have an account??{' '}
                          <a href="{''}" className="text-primary fw-bold">
                            Sign In
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

export default Register;