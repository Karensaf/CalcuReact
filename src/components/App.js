// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Componentes
import Header from './Global/Header';
import Body from './Global/Body';
import Footer from './Global/Footer';

// Assets
import './Global/css/App.css';

// Data
import items from '../data/menu'

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    console.log(this)
    const { children } = this.props;

    return (
      <div className="App">
        <Header 
          title="Sumadorooota" 
          items={items}/>
        <Body body={children} />
        <Footer comentario="Le entiendo un poco más :)" />
      </div>
    );
  }
}

export default App;
