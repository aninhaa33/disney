// components/Animacao.js
import React from 'react';
import CardFilme from './cardfilmes';

const Animacao = ({ animacoes }) => {
  return (
    <div>
      <h2>Animações</h2>
      {animacoes.map((filme, index) => (
        <CardFilme key={index} filme={filme} />
      ))}
    </div>
  );
};

export default Animacao;
