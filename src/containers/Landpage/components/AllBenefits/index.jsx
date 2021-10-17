import React from 'react'
import {Paper,Typography,Box, CardMedia,Card, CardActionArea,Grid,Button, CardContent, CardActions,IconButton} from '@mui/material';
import { useStyles } from "./styled";
import NextButton from '../../../../components/NextButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const steps = [
  {
    label: 'OPEN A BANK ACCOUNT',
    imgPath:
      'data:image/jpeg;base64,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',
  },
  {
    label: 'TAKE YOUR STORE ONLINE',
    imgPath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVvwhCylZ74ky5B5_ntWK-_KDr5cDEANKbNg&usqp=CAU'
  },
  {
  label: 'BUSINESS BANKING REDEFINED',
    imgPath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWs98E4kQECyKcVwQRSz7-NGAjK1lWEuGkxg&usqp=CAU'
  },
  {
  label: 'BUSINESS INSURANCE',
    imgPath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfivpzqugjY-LHVJN1cI5YNXNaZ9QnoSrmbg&usqp=CAU'
  }
];
const AllBenefits = () => {
    const classes = useStyles();
  return (
  
   <Grid
  container
  direction="row"
  justifyContent="space-around"
      alignItems="flex-start" className={classes.mainRootColumnContainer}>
      <Grid item sm={12} md={4} xs={12} className={classes.graphMainContainer}>
            <Box ml={12} mt={7} width={30} className={classes.headingContainer} >
        <Typography variant='h3' fontWeight={500}>All the benefits that go beyond-</Typography>    
        
        <Typography variant='h3' fontWeight={500} color={'#e53935'}>banking.</Typography>    
            </Box>
                <Box ml={22} mt={5} width={280} fontWeight={500}>
            
              <Box mt={15}>
                <NextButton title="ALL BENEFITS" />
                </Box>
        </Box>
                <CardMedia
          component="img" 
          src='/Images/graph.png' 
          alt="chart" className={classes.graphIcon}
        />
      </Grid>
      
   
             <Grid item xs={8} md={6} sm={10} >   
  
     <Grid container spacing={{ xs: 3, md: 4}} columnSpacing={{ xs: 1, sm: 2, md: 10}} columns={10} className={classes.gridContainer} >
        {steps.map((step, index) => (
          <Grid item xs={6} sm={4} md={4} key={index} pt={0}>
            <Card sx={{ maxWidth: 290 }} style={{backgroundColor: "#ffffff00"}} elevation={0}>
      
              <CardMedia
          component="img"
          height="180"
                src={step.imgPath} className={classes.imageView}
                alt="green iguana"
            />
     {/* <BusinessIcon color="secondary" fontSize="large"/> */}
              <Typography variant="body2" color="primary" fontWeight={500}>
            ACCESS TO -
          </Typography>
          <Typography  variant="body2" color="secondary" fontWeight={500}>
            TRADE LICENCE PARTNERSHIPS
          </Typography>
         
 <IconButton color="secondary">
              <ArrowForwardIcon />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
     </Grid> 
      </Grid>
    )
}

export default AllBenefits
