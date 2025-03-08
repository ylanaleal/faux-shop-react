import React, { useEffect, useState } from 'react';
import {
  Card,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Alert,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import banner from '../assets/images/banner.png';

const Home = () => {
  const initialFormData = {
    nomeTutor: '',
    email: '',
    telefone: '',
    nomePet: '',
    especie: '',
    idadePet: '',
    dataReserva: '',
    cidade: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [cidades, setCidades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchCidades = async () => {
      try {
        const response = await fetch(
          'https://api.npoint.io/5fc42ab0e657262b3356',
        );
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados das cidades');
        }
        const data = await response.json();

        if (data.cidades && Array.isArray(data.cidades)) {
          setCidades(data.cidades);
        } else {
          throw new Error('Dados inválidos: esperado um array de cidades');
        }
      } catch (error) {
        setError(error.message);
        console.error('Erro ao buscar cidades:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCidades();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.nomeTutor === '') {
      setError('Insira o nome do tutor.');
      return false;
    }

    if (formData.email === '') {
      setError('Insira o email.');
      return false;
    }

    if (formData.telefone === '') {
      setError('Insira o telefone.');
      return false;
    }

    if (formData.nomePet === '') {
      setError('Insira o nome do pet.');
      return false;
    }

    if (formData.especie === '') {
      setError('Insira a espécie do pet.');
      return false;
    }

    if (formData.idadePet === '') {
      setError('Insira a idade do pet.');
      return false;
    }

    if (formData.dataReserva === '') {
      setError('Insira a data da reserva.');
      return false;
    }

    if (formData.cidade === '') {
      setError('Selecione a cidade.');
      return false;
    }

    setError('');
    setModalOpen(true);
  };

  const confirmReserva = () => {
    setSubmitted(true);
    setModalOpen(false);
    setFormData(initialFormData);
  };

  if (loading)
    return (
      <Container>
        <Spinner color="primary" />
        <p>Carregando...</p>
      </Container>
    );

  return (
    <>
      <img src={banner} style={{ width: '100%' }} />

      <h2
        style={{
          fontFamily: 'monospace',
          textAlign: 'center',
          fontWeight: 'bold',
          margin: '20px 0',
        }}
      >
        Faça a reserva para o seu Pet:
      </h2>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '80%',
          marginBottom: '30px',
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Card body style={{ padding: '2rem' }}>
            {error && <Alert color="danger">{error}</Alert>}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <FormGroup
                style={{
                  width: '50%',
                  marginRight: '20px',
                }}
              >
                <Label
                  for="nomeTutor"
                  style={{ fontFamily: 'monospace', fontWeight: 'bold' }}
                >
                  Nome do Tutor
                </Label>
                <Input
                  name="nomeTutor"
                  id="nomeTutor"
                  placeholder="Nome do Tutor"
                  value={formData.nomeTutor}
                  onChange={(e) =>
                    setFormData({ ...formData, nomeTutor: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup
                style={{
                  width: '50%',
                }}
              >
                <Label
                  for="nomePet"
                  style={{ fontFamily: 'monospace', fontWeight: 'bold' }}
                >
                  Nome do Pet
                </Label>
                <Input
                  name="nomePet"
                  placeholder="Nome do Pet"
                  value={formData.nomePet}
                  onChange={(e) =>
                    setFormData({ ...formData, nomePet: e.target.value })
                  }
                  required
                />
              </FormGroup>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <FormGroup
                style={{
                  width: '50%',
                  marginRight: '20px',
                }}
              >
                <Label
                  for="email"
                  style={{ fontFamily: 'monospace', fontWeight: 'bold' }}
                >
                  Email
                </Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup
                style={{
                  width: '50%',
                }}
              >
                <Label
                  for="telefone"
                  style={{ fontFamily: 'monospace', fontWeight: 'bold' }}
                >
                  Telefone
                </Label>
                <Input
                  name="telefone"
                  type="tel"
                  placeholder="Telefone"
                  value={formData.telefone}
                  onChange={(e) =>
                    setFormData({ ...formData, telefone: e.target.value })
                  }
                  required
                />
              </FormGroup>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <FormGroup
                style={{
                  width: '50%',
                  marginRight: '20px',
                }}
              >
                <Label
                  for="especie"
                  style={{ fontFamily: 'monospace', fontWeight: 'bold' }}
                >
                  Espécie
                </Label>
                <Input
                  name="especie"
                  type="select"
                  value={formData.especie}
                  onChange={(e) =>
                    setFormData({ ...formData, especie: e.target.value })
                  }
                  required
                >
                  <option value="">Selecione a espécie</option>
                  <option value="Cachorro">Cachorro</option>
                  <option value="Gato">Gato</option>
                  <option value="Hamster ou Rato">Hamster ou Rato</option>
                  <option value="Coelho">Coelho</option>
                  <option value="Outro">Outro</option>
                </Input>
              </FormGroup>
              <FormGroup
                style={{
                  width: '50%',
                }}
              >
                <Label
                  for="idadePet"
                  style={{ fontFamily: 'monospace', fontWeight: 'bold' }}
                >
                  Idade do Pet
                </Label>
                <Input
                  name="idadePet"
                  type="number"
                  placeholder="Idade do Pet"
                  value={formData.idadePet}
                  onChange={(e) =>
                    setFormData({ ...formData, idadePet: e.target.value })
                  }
                  required
                />
              </FormGroup>
            </div>

            <FormGroup>
              <Label
                for="dataReserva"
                style={{ fontFamily: 'monospace', fontWeight: 'bold' }}
              >
                Data da Reserva
              </Label>
              <Input
                name="dataReserva"
                type="date"
                value={formData.dataReserva}
                onChange={(e) =>
                  setFormData({ ...formData, dataReserva: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label
                for="cidade"
                style={{ fontFamily: 'monospace', fontWeight: 'bold' }}
              >
                Cidade
              </Label>
              <Input
                name="cidade"
                type="select"
                value={formData.cidade}
                onChange={(e) =>
                  setFormData({ ...formData, cidade: e.target.value })
                }
                required
              >
                <option value="">Selecione sua cidade</option>
                {cidades.map((city) => (
                  <option key={city.id} value={city.nome}>
                    {city.nome}
                  </option>
                ))}
              </Input>
            </FormGroup>
            <Button color="success" type="submit">
              Reservar
            </Button>
          </Card>
        </Form>

        <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
          <ModalHeader>Reserva confirmada</ModalHeader>
          <ModalBody style={{ fontFamily: 'monospace' }}>
            <p>
              <strong>Nome do Tutor:</strong> {formData.nomeTutor}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Telefone:</strong> {formData.telefone}
            </p>
            <p>
              <strong>Nome do Pet:</strong> {formData.nomePet}
            </p>
            <p>
              <strong>Espécie:</strong> {formData.especie}
            </p>
            <p>
              <strong>Idade do Pet:</strong> {formData.idadePet}
            </p>
            <p>
              <strong>Data da Reserva:</strong> {formData.dataReserva}
            </p>
            <p>
              <strong>Cidade:</strong> {formData.cidade}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={confirmReserva}>
              Concluir
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    </>
  );
};

export default Home;
