import React from 'react';
require('./upload-area.scss');

class UploadArea extends React.Component {
  render() {
    return (
        <div className="upload-section">
          <div className="upload-crop-area">
            <img src="" className="picture"/>
          </div>
        </div>
    );
  }
}

export default UploadArea;