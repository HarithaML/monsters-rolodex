import React from 'react';
import  MonsterCard  from './MonsterCard';

 const MonsterCardList = ({ monsters }) => {
    return (
      <div className='flex flex-wrap overflow-x-auto max-w-full '>
        {monsters.map((monster) => (
          <MonsterCard key={monster.id} monster={monster} />
        ))}
      </div>
    );
  };
  
  export default  MonsterCardList;