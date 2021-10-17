import React,{useState} from 'react'
import { useStyles } from "./styled";
import { useTheme } from '@mui/material/styles';
import {Grid,Box, CardMedia,Card, CardActionArea, Container,Typography,Button, CardContent} from '@mui/material';
import MobileStepper from '@mui/material/MobileStepper';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NextButton from '../../../../components/NextButton';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const steps = [
  {
    label: 'Your Business Deserves',
    sublabel:'More',
    buttonTitle:'PARTNERSHIPS',
    imgPath:
      'https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    label: 'Find Your Next Strategic',
    sublabel:'Patner',
    buttonTitle:'sign up',
    imgPath:
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
  label: 'Your Business Deserves',
    sublabel:'More',
    buttonTitle:'PARTNERSHIPS',
     imgPath:
      'https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    label: 'Find Your Next Strategic',
    sublabel:'Patner',
    buttonTitle:'sign up',
    imgPath:
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
];
const HeroBanner = () => {
 const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
    return (
                <Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="flex-start" className={classes.root}>
       <Grid item sm={6} md={5} className={classes.headerContainer}>     
            <Box ml={12} mt={7} width={30} >
        <Typography variant='h3' fontWeight={500} >{steps[activeStep].label}</Typography>    
        <Typography variant='h3' fontWeight={500} color="secondary">{steps[activeStep].sublabel}.</Typography>    
            </Box>
            <Box ml={22} width={140} fontWeight={500} className={classes.paragraphContainer}>
         <Typography variant='body2' fontWeight={500} style={{ wordWrap: "break-word" }}>It ia long established fact that a reader will be distracted by the readable content of a page when looking at its layout when free</Typography>    
              <Box mt={2} className={classes.nextButtonContainer}>
                          <NextButton title={steps[activeStep].buttonTitle} />
 </Box>
          </Box>
       
            </Grid>
        <Grid item md={6} sm={12} className={classes.imageContainer}>
             
           <Box className={classes.CountContainer}>
            <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static" 
        activeStep={activeStep}  className={classes.countButton}
        nextButton={
          <Button
            size="small"
            onClick={handleNext} 
            disabled={activeStep === maxSteps - 1} 
          >
            
            {theme.direction === 'rtl' ? (
              <ArrowBackIcon />
            ) : (
              <ArrowForwardIcon />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} color='secondary'>
            {theme.direction === 'rtl' ? (
              <ArrowForwardIcon />
            ) : (
              <ArrowBackIcon />
            )}
            
          </Button>
        }
      />
          </Box>
          <Box className={classes.imageView}>
<AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents className={classes.autoPlayView}
      >
        {steps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <CardMedia
          component="img" 
          src={steps[activeStep].imgPath}
          alt="green iguana" className={classes.ImageContent}
          />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
          <CardMedia
          component="img" 
          src='/Images/barchartyellow.png' 
          alt="chart" className={classes.chartIcon} 
        />

        </Box>
                </Grid> 
          </Grid>
    )
}

export default HeroBanner;
