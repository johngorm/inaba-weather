import React from 'react';
import PropTypes from 'prop-types';

export const Location = props => {
  return (
    <div className='location'>
      <span className='location_name'>{props.children}</span>
    </div>
  );
}

Location.propTypes = {
  children: PropTypes.string
}
