import React from 'react';
import { Link, IndexLink, withRouter } from 'react-router';

export default withRouter(class extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  render () {
    const { router } = this.context;
    const { index, onlyActiveOnIndex, to, children, router: _, ...props } = this.props;

    const isActive = router.isActive(to, onlyActiveOnIndex);
    const LinkComponent = index ? Link : IndexLink;

    return (
      <li className={isActive ? 'active' : ''}>
        <LinkComponent {...props} to={to}>{children}</LinkComponent>
      </li>
    );
  }
});
