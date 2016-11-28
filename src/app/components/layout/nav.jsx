import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib';

import NavItem from './nav-item';

export default() => (
  <Grid>
    <nav>
      <div className="nav-wrapper">
        <ul className="left">
          <NavItem to="events">Events</NavItem>
          <NavItem to="photos">Photos</NavItem>
        </ul>
      </div>
    </nav>
  </Grid>
);
