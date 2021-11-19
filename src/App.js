import debounce from 'lodash/debounce';

{/* eslint-disable-next-line max-len */}
import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import pages from './pages';
import { ROUTES } from './configs';
import theme from './styles/theme';
import { ThemeProvider } from 'react-jss';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.router = React.createRef();
  }

  _renderApp() {
    return (
      <ThemeProvider theme={theme}>
        <Router ref={this.router}>
          <CssBaseline/>
          <Switch>
            <Redirect exact from="/" to={ROUTES.BERANDA()}/>
            <Route component={pages.Beranda} exact path={ROUTES.BERANDA()}/>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }

  render() {
    return (
      this._renderApp()
    );
  }
}

App.propTypes = {
  auth: PropTypes.object.isRequired
};

export default App;
