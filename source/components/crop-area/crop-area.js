'use strict';

import React from 'react';
require('./crop-area.scss');
class CropArea extends React.Component {


  render() {
    let width = this.props.width || 200;
    let height = this.props.height || 200;
    let styles = {
      width: width + 'px',
      height: height + 'px'
    };

    return (
      <div className="crop-area" style={styles}></div>
    );
  }
}

export default CropArea;