import React,{useState} from 'react'
import {Toolbar,IconButton,Divider,Box,AppBar, Typography, Container, Menu} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image'
import { useStyles } from "./styles";
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from "../Dropdown";
import Link from 'next/link'

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const classes = useStyles();
  const onMouseEnter = () => {
    setDropDown(true)
  }
   const onMouseLeave = () => {
    setDropDown(false)
  }
  return (
      <Container>
        <AppBar  position="fixed" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={classes.appBar} elevation={0}>
          <Toolbar variant="regular" className={classes.maintoolbar}>
          <Box className={classes.logoContainer}>
            <Image src="/Images/SMELogo.png" alt="logo" width={170}
              height={60} />
        <Divider orientation="vertical" variant="middle" flexItem />
                
     <Image src="/Images/RakLogo.png" alt="logo" width={90} 
              height={60} />
              </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }} className={classes.tabContainer} >                
        <Link href="/" underline="none" m={1} >
        <a className={classes.anchorlink}>BUSINESS SET UP</a>
                            </Link>
        <Link href="/About" underline="none"  m={1}>
        <a className={classes.anchorlink} >SAVE & GROW</a>
                            </Link>
                            
        <Link href="/About" underline="none" m={1}>
        <a className={classes.anchorlink} >COMMUNITY</a>
                            </Link>
                            
        <Link href="/About" underline="none"  m={1} >
        <a className={classes.anchorlink}>ABOUT US</a>
          </Link>
                            
                        </Box>
                        
            <Box className={classes.loginContainer} sm={{ flexShrink: 0 }}>
              <IconButton>
                <PersonIcon style={{fill: "red"}}/>
              </IconButton>
          <Link href="/About" underline="none"  >
           <a className={classes.anchorlink}>LOGIN </a>
            </Link>
           <Typography variant='body' fontWeight={500}>/</Typography>    

           <Link href="/About" underline="none" m={0.5}>
          <a className={classes.anchorlink}>REGISTER</a></Link>
            </Box>
             <Box className={classes.languageContainer} sx={{ display: { xs: 'none', md: 'flex' } }} >
              <IconButton>
            </IconButton>
            <Box>
        <Link href="/About" underline="none"  >
              <a className={classes.anchorlink} style={{ color: 'red' }}>EN</a></Link>
         <Typography variant='body' fontWeight={500}>/</Typography>    

            <Link href="/About" underline="none"  ml={1}><a className={classes.anchorlink}>AR</a></Link>
            </Box>
          </Box>
          <MenuIcon className={classes.menuButton} />
        </Toolbar>
                 {dropDown && <Dropdown/>}
                {/* <Dropdown/> */}

      </AppBar>

       </Container> 
    )
}

export default Header
