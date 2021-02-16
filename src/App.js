import { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      anime: [],
      searchField: ''
    };
  }

  componentDidMount() {
    /*
      Jikan - The Unofficial MyAnimeList API
      See here: https://github.com/jikan-me/jikan
      Read docs: https://jikan.docs.apiary.io/#reference/0/season
    */
    fetch('https://api.jikan.moe/v3/season')
      .then((response) => response.json())
      .then((data) => this.setState({
          anime: data.anime.filter((a) => {
            return a.type === 'TV' && a.r18 === false && a.kids === false && a.continuing === false
          })
      }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { anime, searchField } = this.state;
    const filteredAnime = anime.filter((a) => {
      return a.title.toLowerCase().includes(searchField.toLowerCase())
    });

    return (
      <div className="App">
        <h1>EXPLORE ANIME</h1>
        <SearchBox 
          placeholder='want to find?'
          handleChange={ this.handleChange }
        />
        <CardList anime={ filteredAnime } />
      </div>
    )
  }
}

export default App;
