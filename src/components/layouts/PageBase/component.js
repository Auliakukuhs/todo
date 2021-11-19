import React from 'react';
import PropTypes from 'prop-types';

export default class PageBase extends React.Component {
  render() {
    const { children, classes } = this.props;
    return (
      <div className={classes.container}>
        <main>
          {children}
        </main>
      </div>
    );
  }
}

PageBase.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  classes: PropTypes.object.isRequired
};
