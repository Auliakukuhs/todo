import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import clsx from "clsx";
import {CircularProgress, Paper} from "@material-ui/core";

export default class Lists extends React.Component {
  render() {
    const { classes, data, fetching } = this.props;

    let dataSelesai, dataAntri;
    if (data) {
      dataSelesai = data.filter((x) => x.status === 0);
      dataAntri = data.filter((x) => x.status !== 0);
	}

    return (
	  <div className={classes.containerCard}>
		<Paper
		  className={clsx(
			classes.card, { isEmpty: data.length === 0, isFetching: fetching }
		  )}
		>
		  <p className="titleCard">Todo - Selesai</p>
		  {data.length === 0 && (
			<span className="no-content-label">{fetching ? <CircularProgress size="small" /> : 'Belum ada dokumen'}</span>
		  )}
		  <ul className={classes.listSelesai}>
			{dataSelesai.map((document, idx) => (
			  <li key={idx}>
				<span>{document.title.length <= 50 ? document.title : document.title.substring(0, 50) + '...'}</span>
			  </li>
			))}
		  </ul>
		</Paper>
		<Paper
		  className={clsx(
			classes.card, { isEmpty: data.length === 0, isFetching: fetching }
		  )}
		>
		  <p className="titleCard notFinished">Todo - Belum Selesai</p>
		  {data.length === 0 && (
			<span className="no-content-label">{fetching ? <CircularProgress size="small" /> : 'Belum ada dokumen'}</span>
		  )}
		  <ul className={classes.listSelesai}>
			{dataAntri.map((document, idx) => (
			  <li key={idx}>
				<span>{document.title.length <= 50 ? document.title : document.title.substring(0, 50) + '...'}</span>
			  </li>
			))}
		  </ul>
		</Paper>
	  </div>
    );
  }
}

Lists.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
};
