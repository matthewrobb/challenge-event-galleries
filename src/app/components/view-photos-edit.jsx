import React from 'react';

class ViewPhotosEdit extends React.Component {
  render() {
    const { photoId } = this.props.params;

    return (
      <span>
        Edit Photo({photoId}) View
      </span>
    );
  }
}

export default ViewPhotosEdit;
