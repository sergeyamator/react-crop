import React from 'react';
require('./crop-btn.scss');

class CropButton extends React.Component {
  render() {
    return (
      <a className="action-btn" href="#">Crop</a>
    );
  }
}

export default CropButton;