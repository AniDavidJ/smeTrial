import { Container, Grid,Typography,CardMedia } from '@mui/material';
import React from 'react'
import { useStyles } from "./styled";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { grey } from '@mui/material/colors';
import NextButton from '../../../../components/NextButton';
import { Box } from '@mui/system';
import { useRouter } from 'next/router'
import { purple } from '@mui/material/colors';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Footer = () => {
      const router = useRouter()

    const classes = useStyles();
    const handleClick = () =>
       { console.log('clicked');
    router.push('/About')}
    
    return (
        <Container>
            <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} sm={6} md={3} >
           <Typography variant="subtitle2"  color="primary" fontWeight={500} fontSize={11} >
           BUSINESS SETUP
                    </Typography>
                       <Typography variant="subtitle2"  color="primary" fontWeight={500} fontSize={11} pt={0.5}>
           SAVE & GROW
                    </Typography>
                       <Typography variant="subtitle2"  color="primary" fontWeight={500} fontSize={11} pt={0.5}>
           SMESOUK COMMUNITY
                    </Typography>
                       <Typography variant="subtitle2"  color="primary" fontWeight={500} fontSize={11} pt={0.5}>
           SMESOUK WORKSPACE
                    </Typography>
                     <Typography variant="subtitle2"  color="primary" fontWeight={500} fontSize={11} pt={0.5}>
           STRATEGIC PARTNERSHIPS
                    </Typography>
                       <Typography variant="subtitle2"  color="primary" fontWeight={500} fontSize={11} pt={0.5}>
           TRADE LICENCE PARTNERSHIPS
                    </Typography>
                       <Typography variant="subtitle2"  color="primary" fontWeight={500} fontSize={11} pt={0.5}>
           TRADE LICENCE COMPARATOR
                    </Typography>
                       <Typography variant="subtitle2"  color="primary" fontWeight={500} fontSize={11} pt={0.5}>
           NETWORKING
                </Typography>
              <Typography variant="subtitle2" fontWeight={500} fontSize={11} pt={0.5} color='#616161' className={classes.copyright}>
           @ THE NATIONAL BANK OF RAS AL KHAIMAH(P.S.C) 2009 - 2021
                    </Typography>    
             </Grid>
             
                <Grid item xs={12} sm={6} md={3} >
           <Typography variant="subtitle2"  color="primary" fontWeight={500} fontSize={11}>
           RAKBANK BUSINESS ACCOUNT
                    </Typography>
                       <Typography variant="subtitle2"  color="primary" fontWeight={500} fontSize={11} pt={0.5}>
           RAKBANK SIMPLIFY
                    </Typography>
                       <Typography variant="subtitle2"  color="primary" fontWeight={500} fontSize={11} pt={0.5}>
           ACCOUNTABLE
                    </Typography>
                       <Typography variant="subtitle2"  color="primary" fontWeight={500} fontSize={11} pt={0.5} >
           RAK BUSINESS INSURANCE
                    </Typography>
                     <Typography variant="subtitle2"  color="primary" fontWeight={500} fontSize={11} pt={0.5}>
           SME&U BLOG
                    </Typography>
                       <Typography variant="subtitle2"  color="primary" fontWeight={500} fontSize={11} pt={0.5}>
           SME TUBE
                    </Typography>
                       <Typography variant="subtitle2"  color="primary" fontWeight={500} fontSize={11} pt={0.5}>
           NEWS & ARTICLES
                    </Typography>
                       <Typography variant="subtitle2"  color="primary" fontWeight={500} fontSize={11} pt={0.5}>
           SITE MAP
                    </Typography>
  </Grid>
  <Grid item xs={12} sm={6} md={2} >
              <Typography variant="subtitle2" fontWeight={700} fontSize={11} color="secondary">
           SMEsouk about blurb--
                    </Typography>
              <Typography variant="subtitle2"  color='#616161' fontWeight={500} fontSize={11} pt={0.5} pr={6}>
                        That&apos;s also clear.But for some reason, you and I react the exact same way to water.
           That&apos;s clear. Your cells react to bacteria differently than mine. Well, I hope you know thae film. If not ask us!.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Box >
                    <NextButton title="SIGN-UP NOW" />
                    </Box>
                    <Box  pt={2}>
                        <NextButton title="About Us" onClick={ handleClick} backgroundColor='black'/>
                </Box>
                
      <CardMedia
          component="img" 
          src='/Images/ladder.png' 
          alt="chart" className={classes.ladderIcon}
        />
                
                </Grid>
      <Grid item xs={12} sm={6} md={1} >
           
                </Grid>      
 
          </Grid>
           
        </Container>
    )
}

export default Footer
