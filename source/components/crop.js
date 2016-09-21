'use strict';

import React from 'react';
import UploadBtn from './upload/upload-btn';
import UploadArea from './upload/upload-area';
import CropButton from './crop-btn/crop-btn';
import {isSupportedFileApi} from './utils';
import sendAjax from './sendAjax';

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

  crop = () => {
    let imgCoords = document.querySelector('.upload-crop-area').getBoundingClientRect(),
      cropAreaCoords = document.querySelector('.crop-area').getBoundingClientRect();

    let cropCoords = {
      left: cropAreaCoords.left - imgCoords.left,
      right: cropAreaCoords.right - imgCoords.right,
      top: cropAreaCoords.top - imgCoords.top,
      bottom: cropAreaCoords.bottom - imgCoords.bottom,
    };

    this.sendCoords('path-to-file', cropCoords);
  };

  /**
   * Send request to the url, which is provided when function calls
   * @param {String} url
   * @private
   */
  sendCoords(url, coords) {
    let promise = sendAjax(url);
    alert(JSON.stringify(coords));
    promise.then(
      result => {
        // TODO when we get respond from server
      },

      error => {
        // TODO if it error on the server
      }
    )
  }

  render() {
    return (
    <section className="crop container">
      <UploadBtn showPicture={this.showPicture}  />
      {this.state.uploaded ? <UploadArea src={this.state.src} uploaded={this.state.uploaded}  /> : null}
      {this.state.uploaded ? <CropButton crop={this.crop} uploaded={this.state.uploaded} /> : null}
    </section>
    );
  }
}

export default Crop;