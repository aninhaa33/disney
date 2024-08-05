// components/CardPremiados.js
import React from 'react';
import './card.css'

const CardPremiados = ({ filme }) => {
    return (
      <div className="card-filme">
        <img src={filme.cartaz} alt={filme.nome} className="img-filme" />
        <div className="texto-filme">
          <h3>{filme.nome}</h3>
          <p>Ano de premiação: {filme.ano}</p>
          <p>Categoria: {filme.categoria}</p>
        </div>
      </div>
    );
  };

export default CardPremiados;
