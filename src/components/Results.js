import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ result }) => (
  <div>
    Result:
    {' '}
    {result}
  </div>
);

Results.defaultProps = {
  result: 0,
};

Results.propTypes = {
  result: PropTypes.number,
};

export default Results;
