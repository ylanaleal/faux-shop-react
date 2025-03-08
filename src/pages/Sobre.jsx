import React from 'react';
import bannerSobre from '../assets/images/bannerSobre.png';
import imgSobre from '../assets/images/beach-day.svg';
import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

const Contato = () => {
  return (
    <div>
      <img src={bannerSobre} style={{ width: '100%' }} />
      <section style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2
          style={{
            fontFamily: 'monospace',
            textAlign: 'center',
            fontWeight: 'bold',
            margin: '20px 0',
          }}
        >
          Villa Pet Hotel
        </h2>
        <p>*Projeto fictício criado para o MIT 2025 - Infnet</p>

        <div
          style={{
            display: 'flex',
            margin: '50px 0 50px 0 ',
            justifyContent: 'center',
          }}
        >
          <Card
            className="my-2"
            color="success"
            outline
            style={{
              display: 'flex',
              width: '40%',
            }}
          >
            <CardBody style={{ textAlign: 'left', fontFamily: 'monospace' }}>
              <CardText>
                <p>
                  Bem-vindo ao <strong>Villa Pet Hotel</strong>, o refúgio
                  perfeito para o seu pet enquanto você viaja! Nosso compromisso
                  é oferecer um ambiente seguro, acolhedor e cheio de cuidados
                  para que seu amiguinho se sinta em casa, mesmo longe de você.
                  Aqui no Villa Pet Hotel, aceitamos todo tipo de animalzinho,
                  desde cães e gatos até pets exóticos, como aves, répteis e
                  roedores.
                </p>

                <p>Nossos diferenciais incluem: Segurança 24 horas:</p>
                <ul>
                  <li>
                    Assistência veterinária 24h: Contamos com uma equipe de
                    veterinários prontos para qualquer necessidade
                  </li>
                  <li>
                    Espaços personalizados: Ambientes adaptados para cada tipo
                    de pet
                  </li>
                  <li>
                    Atividades e cuidados especiais: Oferecemos passeios,
                    brincadeiras e muito mais para deixar o dia do seu pet ainda
                    mais divertido
                  </li>
                </ul>

                <p>
                  Venha nos conhecer e descubra por que somos o hotel preferido
                  dos pets e de seus donos! 🐾
                </p>
              </CardText>
            </CardBody>
          </Card>

          <img src={imgSobre} style={{ width: '30%', marginLeft: '30px' }} />
        </div>
      </section>
    </div>
  );
};

export default Contato;
