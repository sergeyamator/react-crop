import React from 'react';
import UploadBtn from './upload/upload-btn';
import UploadArea from './upload/upload-area';
import CropButton from './crop-btn/crop-btn';
import {isSupportedFileApi} from './utils';

class Crop extends React.Component {
  state = {
    uploaded: false
  };

  setImage = (file) => {
    if (!isSupportedFileApi()) {
      throw new Error('Ваш браузер не поддерживает современных технологий');
    }

    let fileReader = new FileReader();

    fileReader.addEventListener('load', () => {
      this.setState({
        src: fileReader.result
      });
    });

    fileReader.readAsDataURL(file);
  };

  showPicture = (e) => {
    let file = e.target.files[0];

    this.setImage(file);
    this.setState({
      uploaded: true
    });
  };

  render() {
    return (
    <section className="crop container">
      <UploadBtn showPicture={this.showPicture}  />
      {this.state.uploaded ? <UploadArea src={this.state.src} uploaded={this.state.uploaded}  /> : null}
      {this.state.uploaded ? <CropButton uploaded={this.state.uploaded} /> : null}
    </section>
    );
  }
}

export default Crop;