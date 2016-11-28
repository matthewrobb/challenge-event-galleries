import React, { Component } from 'react';
import {observer} from 'mobx-react';

import { Grid, Row, Col } from 'react-flexbox-grid/lib';

@observer
class EventListCard extends Component {
  constructor() {
    super();
    this.state = { showActions: false };
  }

  toggleActions(e) {
    this.setState({ showActions: !this.state.showActions });
  }

  render() {
    const {event} = this.props;
    const {showActions} = this.state;

    return (
      <div className="card">
        <div className="card-content" onClick={e => this.toggleActions(e)}>
          <span className="card-title grey-text text-darken-4">
            {event.name}
          </span>
        </div>
        <div style={!showActions ? null : {transform: 'translateY(-100%)', display: 'block'}} className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {event.name}
          </span>
        </div>
        <Row middle='xs' center='xs' style={{ flexWrap: 'nowrap', position: 'relative' }}>
          <Col xs={6} style={{position: 'absolute', left: '0'}}>
            <img className="responsive-img z-depth-1" src="http://lorempixel.com/250/250/nature/2" style={{maxWidth: '90%'}}/>
          </Col>
          <Col xs={8} style={{ zIndex: '1' }}>
            <img className="responsive-img z-depth-2" src="http://lorempixel.com/250/250/nature/1" />
          </Col>
          <Col xs={6} style={{position: 'absolute', right: '0'}}>
            <img className="responsive-img z-depth-1" src="http://lorempixel.com/250/250/nature/3" style={{maxWidth: '90%'}} />
          </Col>
        </Row>
      </div>
    );
  }
}

@observer
class ViewEventsList extends Component {
  componentWillMount() {
    this.props.eventsStore.loadEvents();
  }

  render() {
    const { eventsStore } = this.props;
    return (
      <Grid>
        <Grid fluid>
          <Row>
          {eventsStore.items.map((event, key)=> (
            <Col xs={12} sm={6} md={4} lg={3} key={key}>
              <EventListCard event={event} />
            </Col>
          ))}
          </Row>
        </Grid>
      </Grid>
    );
  }
}

export default ViewEventsList;
