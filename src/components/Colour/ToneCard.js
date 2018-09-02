import React from 'react';
import PropTypes from 'prop-types';

const Tone = ({ tone, colour }) => {
  return (
    <div className={`o-swatch__tone  o-surface--l1 u-carbon-${colour}-bg--${tone.title}`} key={tone.key} />
  );
};

Tone.propTypes = {
  tone: PropTypes.object,
  colour: PropTypes.string,
};

export default Tone;
