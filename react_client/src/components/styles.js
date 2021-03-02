import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyItems: 'center',
    textAlign: 'center',
    backgroundColor: '#33333',
    //height:'100%',
    //width: '100%'
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    justifyItems: 'center',
    textAlign: 'center',
    backgroundColor: 'grey',
    width: '100%',
    

  },
  cardRoot: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  // avatar: {
  //   backgroundColor: blue[600],
  // },

}));

export default useStyles;