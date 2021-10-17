import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 90,
    paddingBottom: 90,
    backgroundColor: '#f8f8f8',
    Width:'100%'
 },
  gridContainer: {
        display: "flex",
    width: '100%',
        // height:'50vh',
    justifyContent: 'space-evenly',
    marginTop: 60,
    paddingLeft: '70px',
    paddingRight: '70px',
          [theme.breakpoints.down("xs")]: {
                  height:'90vh',

        }
  },
   semichart: {
        position: 'relative',
     height: "170px", width: '235px',
     bottom: -133,
     left: 280,
    //  left: '300px',
    //  marginBottom:0,
        [theme.breakpoints.down("sm")]: {
        left: 120,
        } 
    },
    arrowContainer: {
        marginRight: '120px',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        float: 'right',
        justifyContent: 'center',
        marginTop:'65px',

    },
   
    backup: {
        marginTop:'35px',
  transform: 'rotate(270deg)',

    }
   
  
}))