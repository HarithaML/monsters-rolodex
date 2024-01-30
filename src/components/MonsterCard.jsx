import React from 'react';

// Functional component for MonsterCard
 const MonsterCard = ({ monster }) => {
  const { id, name,email } = monster;
  return (
    <div key={id} className='flex flex-col items-center justify-center rounded-xl bg-[#C7B8EA] p-[10px] m-[10px] w-[200px] h-[250px] transition-transform transform hover:scale-110'>
        <img alt={name} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
        <span className='name'>{name}</span>
        <span className='email'>{email}</span>
    </div>
  );
};

export default MonsterCard;