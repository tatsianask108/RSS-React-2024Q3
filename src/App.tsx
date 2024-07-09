import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import MainSection from './components/Main/MainSection';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <MainSection />
      </>
    );
  }
}

export default App;
