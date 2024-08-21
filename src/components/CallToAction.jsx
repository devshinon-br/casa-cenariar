import React from 'react';
import styled from 'styled-components';

// Estilo para o botão de ação
const Button = styled.button`
  background-color: #000; 
  color: #fff;            
  width: 400px;           
  height: 80px;          
  padding: 10px 20px;    
  border: none;           
  border-radius: 30px;     
  font-family: 'Inter', sans-serif; 
  font-weight: 300;       
  cursor: pointer;       
  transition: background-color 0.3s ease; 
  font-size: 1.5vw; 

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
        <Button>Fale com a gente</Button>
    );
}

export default CallToAction;
