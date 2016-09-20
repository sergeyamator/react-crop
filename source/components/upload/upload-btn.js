import React from 'react';

require('./upload-btn.scss');

class UploadBtn extends React.Component {
  render() {
    return (
      <label className="upload-label">
        Загрузить изображение
        <input className="upload-btn" type="file" />
      </label>
    );
  }
}

export default UploadBtn;