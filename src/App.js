import React, { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox';
import MonsterCardList from './components/MonsterCardList';
import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
      .catch((error) => console.error('Error fetching monsters:', error));
  }, []); // Empty dependency array to run the effect only once on mount

  const handleSearchChange = (event) => {
    const searchFieldValue = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldValue);
  };

  const filteredMonsters = monsters.filter(({ name }) =>
    name.toLocaleLowerCase().includes(searchField)
  );

  return (
    <div className="min-h-screen  bg-[#7E3F8F] ">
      <div className="flex flex-col items-center justify-center p-[50px]">
        <h1 className="text-8xl">Monsters Rolodex</h1>
        <SearchBox onChange={handleSearchChange} />
        <MonsterCardList monsters={filteredMonsters} />
      </div>
    </div>
  );
};

export default App;
