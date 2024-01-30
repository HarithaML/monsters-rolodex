import React from 'react';

// Functional component for MonsterCard
const MonsterCard = ({ monster }) => {
  const { id, name } = monster;
  return (
    <div key={id}>
      <h1>{name}</h1>
    </div>
  );
};

export default MonsterCard;