import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

const Login = () => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Credenciais inválidas. Use: eve.holt@reqres.in / cityslicka');
    }
  };

  return (
    <div
      className="login-container"
      style={{ maxWidth: '400px', margin: '2rem auto' }}
    >
      <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>
        Login
      </h2>
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
  );
};

export default Login;
