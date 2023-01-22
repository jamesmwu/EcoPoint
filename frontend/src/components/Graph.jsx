import React from 'react';
import LineGraph from 'react-line-graph';

function Graph({ data }) {
  const props = {
    data,
    smoothing: 0.3,
    accent: 'black',
    fillBelow: '#7e6551',
    hover: true,
  };
  return (
    <div className='graph'>
      <LineGraph {...props} />
    </div>
  );
}

export default Graph;
