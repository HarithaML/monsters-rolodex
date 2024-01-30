import React, { Component } from 'react';
import { SearchBox } from './components/SearchBox';
import { MonsterCardList } from './components/MonsterCardList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => ({ monsters: users }), () =>
          console.log(this.state)
        )
      );
  }

  handleSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => ({ searchField }));
  };

  render() {
    const { searchField, monsters } = this.state;
    const { handleSearchChange } = this;

    const filteredMonsters = monsters.filter(({ name }) =>
      name.toLocaleLowerCase().includes(searchField)
    );

    return (
      <div className="App h-screen flex items-center justify-center bg-black">
        <div className="text-center p-20">
          <h1 className="text-5xl font-bold mb-4 text-white">Monsters Rolodex</h1>
          <SearchBox onChange={handleSearchChange} />
          <MonsterCardList monsters={filteredMonsters} />
        </div>
      </div>
    );
  }
}

export default App;
