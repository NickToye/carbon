import React from 'react';
import PropTypes from 'prop-types';
import Palette from './Palette';

const ColourList = ({ colours, palette }) => {
  return (
    <div>
    {Object.keys(colours)
      .filter(function(filteredPalette) {
        return colours[filteredPalette].type === palette;
      })
      .map(key => <Palette key={key} colour={colours[key]} />)}
    </div>
  )
}

ColourList.propTypes = {
  colours: PropTypes.array.isRequired,
  palette: PropTypes.string.isRequired,
};

export default ColourList;