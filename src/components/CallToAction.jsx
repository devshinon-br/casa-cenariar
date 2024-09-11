import React from 'react';
import styled from 'styled-components';

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
  border-radius: 50px;     
  font-family: 'Inter', sans-serif;    
  cursor: pointer;       
  transition: background-color 0.3s ease; 
  font-size: 2rem; 
  text-decoration: none;
  position: absolute;
  top: 500px;
  left: 0px;
  

  @media (max-width: 1199px) { 
    max-width: 250px;
    max-height: 50px;
    font-size: 1.5rem; 
    position: static;
    order: 2;
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
