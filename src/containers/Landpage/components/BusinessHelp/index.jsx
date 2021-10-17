import {Button, Typography,Box, CardMedia,Card, CardActionArea,Grid, Tabs,Tab} from '@mui/material';
import { useStyles } from "./styled";
import NextButton from '../../../../components/NextButton';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/material/styles';

const steps = [
  {
    label: 'Your Business Deserves',
    sublabel:'More',
    buttonTitle:'PARTNERSHIPS',
    imgPath:
      'https://img.freepik.com/free-vector/employees-meeting-office-kitchen-drinking-coffee_74855-5237.jpg?size=626&ext=jpg',
  },
  {
    label: 'Find Your Next Strategic',
    sublabel:'Patner',
    buttonTitle:'sign up',
    imgPath:
      'https://img.freepik.com/free-vector/lazy-employees-making-mess-chaos-workplaces-office-unorganized-managers-chatting-using-computers-desk-among-flying-papers-chaotic-work-teamwork-problem-concept_74855-13147.jpg?size=626&ext=jpg',
  },
  {
  label: 'Your Business Deserves',
    sublabel:'More',
    buttonTitle:'PARTNERSHIPS',
    imgPath:
      'https://cdn.clicospace.com/grapbox/images/2020/02/29183457/Business-Meeting-Illustration.jpg',
  }
];
const BusinessHelp = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setActiveStep(newValue-1)
console.log(newValue);
  };
const handleButtonClick = (event, newValue) => {
    setValue(newValue);
    setActiveStep(newValue-1)

  };
    const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(2);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setValue((prevActiveStep) => prevActiveStep + 1);

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setValue((prevActiveStep) => prevActiveStep - 1);

  };

  const handleStepChange = (step) => {
    setActiveStep(step);
        setValue(step);

  };
  const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
    minWidth: 0,
  minHeight: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: '#b71c1c',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  
  '&.Mui-selected': {
    color: '#212121',
    fontWeight: theme.typography.fontWeightMedium,
  },
  // '&.Mui-focusVisible': {
  //   backgroundColor: '#d1eaff',
  // },
  }));
  
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

    return (
             <Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="flex-start" className={classes.root}>
            <Box className={classes.pieImageContainer}>
          <Box ml={12} mt={7} width={30} className={classes.headingContainer} >
                <CardMedia
          component="img" 
          src='/Images/piediagram.png' 
          alt="chart" className={classes.pieIcon}
        />
        <Typography variant='h3' fontWeight={500}>See how SME<span style={{color:'#de1f2e'}}>souk</span> works for -- </Typography>    
        
        <Typography variant='h3' fontWeight={500} color={'#e53935'}>you</Typography>    
            </Box>
                <Box ml={22} mt={5} width={280} fontWeight={500}>
                    <Grid container>
     <Grid item xs={6}>
         <Typography variant='body2' fontWeight={500}>At RAKBANK, we understand that SMEs are the true heart economy. That's why we created SMEsouk to bring to bring you all the connections you need to grow </Typography> 
                        </Grid>
            <Grid item xs={6}>
         <Typography variant='body2' fontWeight={500}>At RAKBANK, we understand that SMEs are the true heart economy. That's why we created SMEsouk to bring to bring you all the connections you need to grow </Typography> 
         </Grid>                
         </Grid> 
              <Box mt={2}>
                <NextButton title="HELP GROW MY BUSINESS" />
                </Box>
          </Box>
            
            </Box>
            <Box className={classes.heroimageContainer}>
                <Grid item xs={12}>
                       <Grid
  container
  direction="row"
  justifyContent="space-around"
               >
         
  <Tabs
  value={value}
  onChange={handleChange}
  aria-label="secondary tabs example" 
>
  <AntTab value={1} label={ <React.Fragment>
            {activeStep+1 === 1 ? <span style={{ color: '#1890ff',fontWeight:'bold' }}> I WANT TO -- </span> : null}
                  <span style={{ fontSize: "smaller",fontWeight:'bold' }}>SET UP MY BUSINESS</span>
                              {activeStep+1 === 1 ? <Box style={{ backgroundColor: '#000000', width:'8px', height:'8px' ,borderRadius:20,margin:'6px',fontWeight:'bold'}}>  </Box> : null}

              </React.Fragment>} />
  <AntTab value={2} label={ <React.Fragment>
                {activeStep+1 === 2 ? <span style={{ color: '#1890ff',fontWeight:'bold' }}> I WANT TO -- </span> : null}
                  <span style={{ fontSize: "smaller",fontWeight:'bold' }}>GROW MY BUSINESS</span>
              {activeStep+1 === 2 ? <Box style={{ backgroundColor: '#000000', width:'8px', height:'8px' ,borderRadius:20,margin:'6px',fontWeight:'bold'}}>  </Box> : null}

              </React.Fragment>} />
  <AntTab value={3} label={ <React.Fragment>
              {activeStep+1 === 3 ? <span style={{ color: '#1890ff',fontWeight:'bold' }}> I WANT TO -- </span> : null}
                  <span style={{ fontSize: "smaller" ,fontWeight:'bold'}}>EXPAND MY BUSINESS</span>
                 {activeStep+1 === 3 ? <Box style={{ backgroundColor: '#000000', width:'8px', height:'8px' ,borderRadius:20,margin:'6px',fontWeight:'bold'}}>  </Box> : null}

              </React.Fragment>}/>
                    </Tabs>
                    
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
            </Grid>
                </Grid>
      <Grid className={classes.ImageContainer}>          
            <CardMedia
          component="img"
          height="440"
          src={steps[activeStep].imgPath}
          alt="green iguana" className={classes.imageView}
            />
                 <CardMedia
          component="img" 
          src='/Images/cornerBarChart.png' 
          alt="chart" className={classes.chartIcon}
        />
          </Grid>
             
        </Box>
        
        </Grid>
    )
}

export default BusinessHelp
