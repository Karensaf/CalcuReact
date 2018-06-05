//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import logo from './images/logo.svg';

class   Footer extends Component {
    static propTypes = {
        comentario: PropTypes.string.isRequired
    }
  render() {
    const {comentario} = this.props
    const { copyright = "DevF 2018" } =this.props;
     console.log(this)
    return (
        <div className="Footer">
        <p>Soy un footer</p>
        <p>{comentario}</p>     
      </div>
    );
  }
}





export default Footer;