const styles = (theme) => ({
  container: {
    '& main': {
      [theme.query.medium]: {
        marginTop: 84
      },
      [theme.query.small]: {
        marginTop: 99
      },
      marginTop: 120
    },
    width: '100%',
    maxWidth: 1300,
    margin: '0 auto',
  },
});

export default styles;
