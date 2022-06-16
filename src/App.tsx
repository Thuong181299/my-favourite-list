import React, {useState} from 'react';

import './App.css';
import { AddToList } from './components/AddToList';
import { List } from './components/List';

export interface IState {
  people: {
    name: string
    age: number
    img: string
    address: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Daniel James",
      age: 35,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      address: "London"
    }
])
  return (
    <div className="App">
      <h1>My-Favourite-Singer</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
