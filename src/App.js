import React, {Component} from 'react';
import './App.css';

import CardList from './conponents/CardList/CardList.component';
import SearchBox from './conponents/SearchBox/SearchBox.component';

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
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  changeMessage = () => {
    this.setState({message: 'Goodnight, world!'});
  }

  updateSearchField = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox handleOnChange={this.updateSearchField} placeholderText='Search Monsters'/>
        <CardList monsters={filteredMonsters}>}
        </CardList>
      </div>
    );
  }
}

export default App;
