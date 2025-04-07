import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Container,
  Modal,
} from 'reactstrap';

const Login = () => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const success = await login(email, password);
      if (success) {
        navigate(location.state?.from || '/', { replace: true });
      } else {
        setError('Wrong credentials. Try: eve.holt@reqres.in | cityslicka');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Error. Try again.');
    }
  };

  return (
    <Container
      style={{
        minHeight: 'calc(100vh - 105px)',
      }}
    >
      <div
        className="login-container"
        style={{ maxWidth: '400px', margin: '2rem auto' }}
      >
        <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>
          Login
        </h2>
        <p style={{ textAlign: 'center', fontStyle: 'oblique' }}></p>
        {error && <Alert color="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="password">Senha</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>

          <Button color="success" block className="mt-3">
            Entrar
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
