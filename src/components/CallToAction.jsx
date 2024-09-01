import React from 'react';
import styled from 'styled-components';

// Estilo para o botão de ação
const Button = styled.a`
  background-color: #000; 
  color: #fff;          
  display:flex;
  align-items: center;
  justify-content: center;  
  width: 400px;           
  height: 80px;          
  padding: 10px 20px;    
  border: none;           
  border-radius: 30px;     
  font-family: 'Inter', sans-serif;    
  cursor: pointer;       
  transition: background-color 0.3s ease; 
  font-size: 1.5vw; 
  text-decoration: none;

  @media (max-width: 768px) {
    width: 100%; 
    font-size: 5vw;
  }

  &:hover {
    background-color: #333; 
  }
`;

function CallToAction() {
    return (
        <Button href='#entre-em-contato'>Fale com a gente</Button>
    );
}

export default CallToAction;
