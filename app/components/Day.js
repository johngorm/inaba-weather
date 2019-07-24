import React, { PureComponent } from 'react';

export default class Day extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='day'>
        <span className='day_abbrev'>{this.props.name}</span>
        <span className='day_weather_icon'>Icon Here</span>
        <span className='day_number'>{this.props.monthDay}</span>
      </div>
    );
  }
}

