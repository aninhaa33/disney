// components/LiveAction.js
import React from 'react';
import CardFilme from './cardfilmes';

const LiveAction = ({ liveAction }) => {
  return (
    <div>
      <h2>Live Action</h2>
      {liveAction.map((filme, index) => (
        <CardFilme key={index} filme={filme} />
      ))}
    </div>
  );
};

export default LiveAction;
