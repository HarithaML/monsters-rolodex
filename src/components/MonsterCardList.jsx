import React from 'react';
const MonsterCardList = ({ monsters }) => {
    return (
      <div>
        {monsters.map((monster) => (
          <MonsterCard key={monster.id} monster={monster} />
        ))}
      </div>
    );
  };
  
  export default MonsterCardList;