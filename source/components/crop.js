import React from 'react';
import UploadBtn from './upload/upload-btn';
import UploadArea from './upload/upload-area';
import CropButton from './crop-btn/crop-btn';

class Crop extends React.Component {
  render() {
    return (
    <section className="crop container">
      <UploadBtn />
      <UploadArea />
      <CropButton />
    </section>
    );
  }
}

export default Crop;