import component from './component';
import styles from './styles';
import withStyles from 'react-jss';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';

export function mapStateToProps ({ beranda }) {
  return {
    beranda
  };
}

export function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(component);

export default withStyles(styles)(Connected);
