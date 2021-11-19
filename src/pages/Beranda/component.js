/* eslint-disable max-lines */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PageBase from '../../components/layouts/PageBase';
import Lists from "../../components/elements/Lists";

export default class Beranda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	  fetching: false,
	  lists: []
	};
  }

  componentDidMount() {
    this._requestTodo();
	window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  componentWillReceiveProps({ beranda }) {
    this.setState({
	  fetching: beranda.fetching,
	  lists: beranda.lists ? beranda.lists.data : []
	});
  }

  _requestTodo = () => {
    const { actions } = this.props;

    actions.requestTodo();
  }

  render() {
    const { classes } = this.props;
    const { lists, fetching } = this.state;

    return (
      <PageBase history={this.props.history}>
        <Helmet>
          <title>Beranda - Todo List</title>
        </Helmet>
        <section className={classes.container}>
          <Lists
		  	data={lists}
			fetching={fetching}
		  />
        </section>
      </PageBase>
    );
  }
}

Beranda.defaultProps = {
  classes: {},
};

Beranda.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};
