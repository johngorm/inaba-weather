import React, { PureComponent } from 'react';

export default class Day extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='day'>
        <span className='day_abbrev'>Day Name</span>
        <span className='day_number'>Day Num</span>
        <span className='day_weather_icon'>Icon Here</span>
      </div>
    );
  }
}

