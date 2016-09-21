import React from 'react';
require('./crop-btn.scss');

class CropButton extends React.Component {
  render() {
    return (
      <a className="action-btn" onClick={this.props.crop} href="#">Crop</a>
    );
  }
}

export default CropButton;