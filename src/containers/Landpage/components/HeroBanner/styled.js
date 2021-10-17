import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {

    backgroundColor: '#f2f2f2',
    maxHeight: '120vh',
    display: "flex",
    justifyContent: 'space-evenly',
    marginTop: 50,
    [theme.breakpoints.down("md")]: {
      minHeight: '180vh',
      left: '10px',

    },
    headerContainer: {
  marginLeft:'40px'
},
  },
  CountContainer: {
    float: 'right',
    marginRight: '75px',
    [theme.breakpoints.down("sm")]: {
      marginRight: '160px',
    }

  },
  countButton: {
    width: '200px',
    backgroundColor: '#ffffff00',

  },
  imageContainer: {
    marginTop: '60px'
  },
  paragraphContainer: {
    marginTop: '22px',
    marginBottom: '120px',
    [theme.breakpoints.down("md")]: {
          marginBottom: '10px'

}
  }, nextButtonContainer: {
      marginTop: '25px'

  }, imageView: {
    position: 'relative',
    bottom: '-40px',
    right: '0px',
    borderRadius: '10px',

    [theme.breakpoints.down("md")]: {
      bottom: '0px',
      width: '450px',
      height: "550",
      left: '150px',
          bottom: '-60px',
    },
    [theme.breakpoints.down("sm")]: {
      bottom: '-40px',
      width: '850px',

    },
    [theme.breakpoints.down("xs")]: {
      bottom: '-10px',
      width: '850px',

    },
  },
  chartIcon: {
   
 position: 'absolute',
        top: '10px',
        left: '-100px',
 
    objectfit: 'contain',

    height: "140px", width: '170px',
  },
  ImageContent: {
    borderRadius: 10,
        maxHeight: "500px", width: '600px',
  
  },
  autoPlayView: {
    width: '100%',
    backgroundColor:'#ffffff00'
  }
 
}))