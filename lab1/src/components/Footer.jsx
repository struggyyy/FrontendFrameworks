import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <Container className="p-4">
        <img src='/wsei.png' alt='WSEI' width={'200px'}></img>
        <div>jakub.strugala@microsoft.wsei.edu.pl</div>
      </Container>
    </footer>
  );
};

export default Footer;
