import { useContext, useState } from 'react';
import { Col, Button, Row, Container, Card, Form} from 'react-bootstrap';
import './login.css'
import { useNavigate } from "react-router-dom";
import { UserContext, login } from '../components/context/UserContext.js';


const Login = () => {
  
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const { setCurrentUser } = useContext(UserContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await login(inputs);
      setCurrentUser(user);
      navigate("/");
      localStorage.setItem('username', user.username);
    } catch (err) {
      if (err.response) {
        setErr(err.response.data);
      } else {
        setErr("An error occurred.");
        console.log(err);
      }
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
                    <Form onSubmit={handleLogin}>
                    {err && err}
                      <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label className="text-center">Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" name="username" onChange={handleChange} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="Password" name='username' onChange={handleChange}>
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" onClick={handleLogin}>Sign in</Button>
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
