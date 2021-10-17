import { red } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    mainRootColumnContainer: {
       
        backgroundColor: '#fef5d5',
        minHeight: '100vh', 
    },
  root: {
        display: "flex",
        width: '100%',
          justifyContent:'space-evenly',
        
    },
    headingContainer: {
        height: '30vh',
        width: '30vh',
        backgroundColor: 'rose',
        fontWeight:'800',  
    },

    gridContainer: {
        marginTop: '40px',
        marginBottom:'40px'
    },
    graphMainContainer: {
        position: 'relative',

  },
  graphIcon: {
    position: 'absolute',
    height: "190px", width: '210px',
    right: '0px',
        bottom: '-210px'
    },
    imageView: {
        borderRadius: 10,
        marginBottom:'20px'
  }
   
}))