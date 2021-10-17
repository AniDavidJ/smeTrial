import { red } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
dropDownmenu:{
    width: '100px',
    position: 'absolute',
        top: '80px',
  },
    dropDownlink: {
        display: 'inline',
        width: '50%',
        height: '100%',
        padding: '16px',
        color: '#ffff',
        backgroundColor:'red'
    },
    oneLine: {
        display: 'inline',
        margin: '10px',

    }, anchorLink: {
        textDecoration: 'none',
        color: 'black',
        fontSize: 12,
        fontWeight: 500,
        
'&:hover': {
    color:'red'
}
    },
    viewpop: {
        width: '340px',
        backgroundColor: 'rgb(135, 206, 235)',
        height: '60%',
        padding: '0px',
        position: 'absolute',
        right: '0px',
        marginTop: '65px',
        marginRight: '93px',
        justifyContent: 'center',
           alignItems:'center'
    }


}))
