
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  appBar: {
   backgroundColor:'#ffffff00'
 },
  maintoolbar: {
    borderBlockEnd: '3px solid rgb(135, 206, 235)',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
   backgroundColor: '#fff',

    '&:hover': {
      color: '#3c52b2',
  },
  },
  logoContainer: {
        display: 'flex',
    alignItems: 'center',
        marginLeft:'70px'

  },
  tabContainer: {
    fontSize: 10,
    fontWeight: "bold",
  },
  loginContainer: {
    flexDirection:'row',
     fontSize: 10,
    fontWeight: "bold",
    width: 190,
  },
  languageContainer: {
    fontSize: 10,
    fontWeight: "bold",
    width: 20,
    marginRight:'65px'
  },

  menuButton: {
    backgroundColor: 'rgb(135, 206, 235)',
    height: '62px',
    width: '50px',
    padding: '5px',
    marginRight:'70px'
  },

 anchorlink: {
   textDecoration: 'none',
   margin: '10px',
   color: 'black',
     '&:hover': {
      color: 'red',
  },
 }
})) 

