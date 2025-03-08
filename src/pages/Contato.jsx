import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import bannerContato from '../assets/images/contato-banner.png';
import linkedin from '../assets/images/linkedin-brands.svg';
import github from '../assets/images/github-brands.svg';

const Contato = () => {
  return (
    <>
      <img src={bannerContato} style={{ width: '100%' }} />
      <section style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2
          style={{
            fontFamily: 'monospace',
            textAlign: 'center',
            fontWeight: 'bold',
            margin: '20px 0',
          }}
        >
          Entre em contato comigo
        </h2>
        <section
          style={{
            margin: '30px 0 50px 0',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Card
            className="my-2"
            color="success"
            outline
            style={{
              display: 'flex',
              width: '50%',
              margin: '50px 0 50px 0',
            }}
          >
            <CardBody
              style={{
                textAlign: 'center',
                fontFamily: 'monospace',
              }}
            >
              <CardText>
                <p>
                  Desenvolvedora Full Stack apaixonada por tecnologia e por
                  solucionar problemas. Possuo experiência com git, GitHub,
                  HTML, CSS, SCSS, Bootstrap, Ruby on Rails, JavaScript,
                  PostgreSQL, MySQL, Node.js e Express.
                </p>

                <p>
                  Atualmente, aluna da Pós Graduação em Desenvolvimento Full
                  Stack do Infnet.
                </p>

                <ul
                  style={{
                    listStyleType: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '50px',
                  }}
                >
                  <li style={{ marginRight: '30px' }}>
                    <a
                      href="https://www.linkedin.com/in/ylana-leal/"
                      style={{
                        textDecoration: 'none',
                        color: 'black',
                        cursor: 'pointer',
                      }}
                    >
                      <img src={linkedin} alt="" style={{ width: '30px' }} />{' '}
                      linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/ylanaleal"
                      style={{
                        textDecoration: 'none',
                        color: 'black',
                        cursor: 'pointer',
                      }}
                    >
                      <img src={github} alt="" style={{ width: '30px' }} />{' '}
                      github
                    </a>
                  </li>
                </ul>
              </CardText>
            </CardBody>
          </Card>
        </section>
      </section>
    </>
  );
};

export default Contato;
