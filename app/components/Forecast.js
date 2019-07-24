import React, { Component } from 'react';

export default class Forecast extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='forecast'>
      {/*This will display a font awesome icon based on forecast keyword */}
      {/*TODO: see if we can split forecast between day and evening */}
      </div>
    );
  }
}

