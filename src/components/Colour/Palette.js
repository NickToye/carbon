import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToneCard from './ToneCard';
import * as colourActions from '../../actions/colourActions';
import './Palette.scss';

const Palette = ({ colour, tones }) => {
  console.log('colours: ' + colour);
  const colourClass = colour.title.replace(/\s+/g, '-').toLowerCase();
  return (
    <div>
      <div className={`u-carbon-${colourClass}-bg  o-swatch  o-grid__el  u-padding  o-surface--l1`}>
        <h4 className="o-swatch__title">{colourClass}</h4>
        <pre className="o-swatch__code  u-margin-none">
        <code>.u-carbon-{colourClass}-bg</code></pre>
      </div>
      <div className="o-flex  o-flex--row  o-flex--wrap  o-swatch__tones  u-margin-bottom-small">
        {Object.keys(tones).map(key => <ToneCard key={key} tone={tones[key]} colour={colourClass} />)}
      </div>
      <div
        className={`u-carbon-${colourClass}-gradient  o-swatch  o-grid__el u-padding  u-border-radius  o-surface--l1`}
      >
        <h4 className="o-swatch__title">{colourClass} Linear Gradient</h4>
        <pre className="o-swatch__code  u-margin-none">
        <code>.u-carbon-{colourClass}-gradient</code></pre>
      </div>
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
