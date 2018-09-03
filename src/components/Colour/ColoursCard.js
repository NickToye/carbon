import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as colourActions from '../../actions/colourActions';
import ColourList from './ColourList';

export class ColoursCard extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      palette: ['brand', 'neutral', 'utility'],
    };

  }

  

  render() {
    const { colours } = this.props;
    return (
      <div className="u-relative">
        <header>
          <h1 className="testing">Colours</h1>
          <p>A tool that will display the correct colours.</p>
        </header>

        <section className="u-carbon-pale-grey-bg--tint-50">
          <ColourList colours={colours} palette={this.state.palette[0]} />
          <ColourList colours={colours} palette={this.state.palette[1]} />
          <ColourList colours={colours} palette={this.state.palette[2]} />
        </section>
      </div>
    );
  }
}

ColoursCard.propTypes = {
  colours: PropTypes.array.isRequired,
  // actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    colours: state.colours,
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
)(ColoursCard);
