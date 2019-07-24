import React, { Component } from 'react';

export default class WeekForecast extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //if have location, call weather db
  }

  componentDidUpdate() {
    // if given premission to get location, call weather db, update state
  }

  render() {
    return (
      <div className='week-forecast-container'>
        {/* weekly forecast components here */}
      </div>
    );
  }
}
