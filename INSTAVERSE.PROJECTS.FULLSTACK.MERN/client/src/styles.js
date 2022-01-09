import { makeStyles } from '@material-ui/core/styles';
/* material-ui provide breakpoint for mobile in theme param */
export default makeStyles(theme => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  heading: {
    color: '#55133B',
    fontWeight: '400',
    textTransform: 'lowercase',
  },
  image: {
    margin: '15px',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
}));
