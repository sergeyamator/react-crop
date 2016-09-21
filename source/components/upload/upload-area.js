import React from 'react';
require('./upload-area.scss');
import CropArea from './../crop-area/crop-area';

class UploadArea extends React.Component {
  render() {
    return (
        <div className="upload-section">
          <div className="upload-crop-area">
            <img src={this.props.src || null} className="picture"/>
          </div>
          {this.props.uploaded ? <CropArea /> : null}
        </div>
    );
  }
}

export default UploadArea;