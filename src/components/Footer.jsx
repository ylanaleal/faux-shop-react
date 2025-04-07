import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  font-family: monospace;
  background: #000;
  margin-bottom: 0;
  padding: 5px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <p style={{ marginBottom: '0', color: '#fff' }}>
        Todos os direitos reservados.
      </p>
    </FooterStyle>
  );
};

export default Footer;
