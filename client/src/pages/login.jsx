import { useContext, useState } from 'react';
import { Col, Button, Row, Container, Card, Form} from 'react-bootstrap';
import './login.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [err, setErr] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8800/api/auth/login', { username, password });
      navigate('/');
    } catch (err) {
      setErr(err.response.data);
    }
  };

  function goHome() {
    window.location='/';
  }

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
                    <Form onSubmit={handleSubmit}>
                    {err && err}
                      <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label className="text-center">Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" name="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="Password" name='username'>
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" onClick={handleSubmit}>Sign in</Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{' '}
                        <a href="/register" className="text-primary fw-bold">Sign up</a>
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
