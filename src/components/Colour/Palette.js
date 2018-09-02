import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import ToneCard from './ToneCard';
import * as colourActions from '../../actions/colourActions';

const Palette = ({ colour, tones }) => {
  console.log('colours: ' + colour);
  const colourClass = colour.title.replace(/\s+/g, '-').toLowerCase();
  return (
    <div>
      <Link to={'./colour/' + colour.id} className={`u-carbon-${colourClass}-bg  o-swatch  o-grid__el  u-padding  o-surface--l1`} />
      <div className="o-flex  o-flex--row  o-flex--wrap  o-swatch__tones  u-margin-bottom-small">
        {Object.keys(tones).map(key => <ToneCard key={key} tone={tones[key]} colour={colourClass} />)}
      </div>
      <div
        className={`u-carbon-${colourClass}-gradient  o-swatch  o-grid__el u-padding  u-border-radius  o-surface--l1`}
      />
    </div>
  );
};

Palette.propTypes = {
  colour: PropTypes.object.isRequired,
  tones: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    tones: state.tones,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(colourActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Palette);
