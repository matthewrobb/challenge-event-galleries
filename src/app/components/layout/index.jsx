import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib';

import styles from './layout.scss';

import Nav from './nav';

export default({ children }) => (
  <div className={styles.layout}>
    <header>
        <Nav />
    </header>
    <main>
      {children}
    </main>
  </div>
);
