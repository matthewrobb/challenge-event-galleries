import React from 'react';
import ReactDOM from 'react-dom';

import {
  Router,
  Route,
  IndexRoute,
  IndexRedirect,
  Redirect,
  browserHistory,
  hashHistory
} from 'react-router';

import Layout from './components/layout';
import ViewAdmin from './components/view-admin';

import ViewEventsList from './components/view-events-list';
import ViewEventsNew from './components/view-events-new';
import ViewEventsEdit from './components/view-events-edit';

import ViewPhotosList from './components/view-photos-list';
import ViewPhotosNew from './components/view-photos-new';
import ViewPhotosEdit from './components/view-photos-edit';

import ProviderStores from './components/provider-stores';

class App extends React.Component {
  Routes() {
    return (
      <Route component={ProviderStores}>
        <IndexRedirect to="events" />

        <Route path="events">
          <IndexRoute component={ViewEventsList} />
          <Redirect from=":eventId" to=":eventId/photos" />
        </Route>

        <Route path="(events/:eventId/)photos(/:photoId)" component={ViewPhotosList} />
      </Route>
    );
  }

  render() {
    const {protocol} = this.props;

    return (
      <Router history={protocol === 'file:' ? hashHistory : browserHistory}>
        <Route path="/" component={Layout}>

          <Route path="admin" component={ViewAdmin}>
            <Route path="events">
              <Route path="new" component={ViewEventsNew} />
              <Route path=":eventId/edit" component={ViewEventsEdit} />
            </Route>

            <Route path="photos">
              <Route path="new" component={ViewPhotosNew} />
              <Route path=":photoId/edit" component={ViewPhotosEdit} />
            </Route>

            {this.Routes()}
          </Route>

          {this.Routes()}
        </Route>
      </Router>
    );
  }
}

export default App;

