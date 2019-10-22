import React from 'react';
import styled from 'styled-components';

//Elements
import {Button, Searchbar} from './styles/elements.js'

//Icons
import searchIcon from './svg/search.svg'
import './App.css'

const Container = styled.div`
  width: 1280px;
  min-width: 1280px;
  margin: 0 auto;
  .row {
    width: 100%;
    display: flex;
    align-items: center;
  }
`

const Subhead = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 160px 0 48px;
`


function App() {
  return (
    <div className="App">  
    <Container>
      <Subhead>Buttons</Subhead>
        <div className="row">
          <Button href="/">Playlist</Button>
          <Button href="/" outline>Playlist</Button>
          <Button href="/" primary>Songs</Button>
          <Button href="/" secondary>Songs</Button>
        </div>
        <Subhead>Search Bar</Subhead>
        <div className="row">
          <Searchbar>
           <img src={searchIcon} alt="searchIcon"/>
           <input placeholder="Search for podcasts, news, stories, etc." type="text"/>
          </Searchbar>
        </div>
      </Container>
    </div>
  );
}

export default App;
