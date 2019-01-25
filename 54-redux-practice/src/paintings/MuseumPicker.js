import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const MuseumPicker = ({ filterPaintings, filter }) => {
  return (
    <div className="row">
      <div className="ui menu">
        <div
          className={`${filter === '' ? 'active' : ''} item`}
          onClick={() => filterPaintings('')}
        >
          All Museums
        </div>
        <div
          className={`${filter === 'National Gallery of Art' ? 'active' : ''} item`}
          onClick={() => filterPaintings('National Gallery of Art')}
        >
          National Gallery of Art, Washington D.C.
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  filter: state.filter
})

export default connect(mapStateToProps, actions)(MuseumPicker);
