import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        display: "flex",
        width: '100%',
          justifyContent:'space-evenly',
       orientation:"vertical",
    },
    headingContainer: {
        height: '30vh',
        width: '50vh',
        backgroundColor: 'rose',
        fontWeight:'800',  
    },
    heroimageContainer: {
      marginTop: 50,
    },
    imageView: {
         marginTop: 80,
        width: '550px'
    },
    ImageContainer: {
      position: 'relative',

     },
    chartIcon: {
        position: 'absolute',
        height: "120px", width: '120px',
        bottom: '0',
        right:'40px'
     
  },
  countButton: {
    backgroundColor: '#ffffff00',

  },
   pieImageContainer: {
    position: 'relative',

  },
  pieIcon: {
    position: 'absolute',
    height: "120px", width: '160px',
    right: '-40px',
top:'120px'   }
  
}))