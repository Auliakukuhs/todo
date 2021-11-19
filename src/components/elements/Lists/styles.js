const styles = (theme) => ({
  containerCard:{
	[theme.query.small]: {
	  padding: '40px 20px 40px 20px',
	},
	[theme.query.mediumsmall]: {
	  padding: '50px 19px',
	  maxWidth: 900,
	  marginLeft: 'auto',
	  marginRight: 'auto',
	},
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-around',
	padding: '55px 85px 81px 85px'
  },
  card: {
	[theme.query.small]: {
	  '&:last-of-type': {
		marginBottom: 0
	  },
	  flex: '0 0 100%', height: '321px',marginBottom: 30,
	},
	[theme.query.mediumsmall]: {
	  flex: '0 0 230px', height: '300px', paddingLeft: '12px',
	  paddingRight: '12px',
	  paddingTop: '25px',
	},
	borderRadius: '2%',
	boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.25)',
	flex: '0 0 350px',
	height: 'auto',
	padding: '30px 25px 35px 25px',
	position: 'relative',

	'& .titleCard': {
	  '&.notFinished': {
		color: 'red'
	  },
	  color: 'grey',
	  fontSize: '16px !important',
	  fontWeight: 700,
	  lineHeight: '19px',
	  paddingBottom: 25,
	  textAlign: 'center',
	  margin: 0
	},
	'&.isFetching': {
	  '& .titleCard': {
		color: 'grey',
	  },
	},

	'&.isEmpty': {
	  '& .titleCard': {
		color: '#9E9E9E'
	  },
	  '& .no-content-label': {
		width: '100%',
		textAlign: 'center',
		fontSize: 16,
		lineHeight: '19px',
		color: '#9E9E9E',
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)'
	  }
	}
  },
  listSelesai: {
	listStyle: 'none',
	margin: 0,
	padding: 0,
	'& li': {
	  display: 'flex',
	  justifyContent: 'space-around',
	  borderBottom: '0.5px solid #757575',
	  height: '45px',
	  alignItems: 'center',
	  '& a': {
		color: '#212121',
		fontSize: 12,
		textDecoration: 'none',
		'&:hover': {
		  textDecoration: 'underline'
		}
	  }
	}
  },
});

export default styles;
