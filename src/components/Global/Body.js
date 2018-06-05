// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Body extends Component {
   static propTypes = {
    body: PropTypes.object.isRequired
   }
  render() {
    //console.log("Renderizando esta funcion")
    const {body} = this.props
    return (
      <div>
       {body}
      </div>
    );
  }
}

export default Body;



 
