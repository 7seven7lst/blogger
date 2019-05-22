import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
  }

  onDrop = (picture) => {
    const { updateImage } = this.props;
    console.log("updateImage>>>", updateImage)
    updateImage(picture);
  }

  render() {
    return (
      <ImageUploader
          withIcon={true}
          buttonText='Choose images'
          onChange={this.onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
      />
    );
  }
}

export default ImageUpload;