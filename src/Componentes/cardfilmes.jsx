// components/CardFilme.js
import React from 'react';
import './card.css'

const CardFilme = ({ filme }) => {
  return (
    <div className="card-filme">
      <img src={filme.cartaz} alt={filme.nome} className="img-filme" />
      <div className="texto-filme">
        <h3>{filme.nome}</h3>
        <p>Data de Lançamento: {filme.data_lancamento}</p>
        <p>Diretor: {filme.diretor}</p>
      </div>
    </div>
  );
};

export default CardFilme;
