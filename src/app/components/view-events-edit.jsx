import React from 'react';

class ViewEventsEdit extends React.Component {
  render() {
    const { eventId } = this.props.params;

    return (
      <span>
        Edit Event({eventId}) View
      </span>
    );
  }
}

export default ViewEventsEdit;
