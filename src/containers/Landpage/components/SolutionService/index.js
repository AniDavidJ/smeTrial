import React from 'react'
import { useStyles } from "./styled";
import {Button,Item,Divider,Typography,Box, CardMedia,Card,Grid,Container, CardContent, CardActions,IconButton} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const steps = [
  {
    label: 'OPEN A BANK ACCOUNT',
    imgPath:
      'data:image/png;base64,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',
  },
  {
    label: 'TAKE YOUR STORE ONLINE',
    imgPath:
      'data:image/png;base64,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',
  },
  {
  label: 'BUSINESS BANKING REDEFINED',
    imgPath:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABv1BMVEX//////f/8////+//6/////f7/+f/3//////3///v8/v/6//3//f3///rz/////P3/9v/5//rFAAD///bVACHeACS3AAD/9/fYABn2//v/5urPABXXAB7/8Of/+vevAAD/8fbiABzDABHEABnOAADNACDad4HIAAD/7u3VABvWAA3629L6z9XFAAnbACn/+vH/3t/UBCfDACftnKa4ACbcAAD2tMHqlKS0ABHoACz/5+XooKbTADHUV2nFACvlACzXyc3PeJHzsMa/d4XCho/rn7LqtbvknJz42OHnp7LtwcfkdorlX3jPSWHBNk7CIT7NGjujJ0DGa3aiAAClABC3UmH0x77PZXeOAAbSoarrABv24tP8wND2qrDYKD3bp6HXSlfkjJLUY2XTkKW7c3LXL1H3o7vrr6jRhIzWaXK5gIDqhInONkbmw8byvs7/5/fdgnW6ADfrdW/5iaX0j5fpTmHbIEzid3vFaXzBO1rvjan2fZDumZrKWW7/0OOxGTrSpbScEhv//uXWTU/kf0zs26buwFf25or6/8zvZSz+vT7x5ELs6Gn7+KvzknTET1TrjSX/zDT12F39qirEN17VBJMxAAATKElEQVR4nO2b+3fbxpXHZ4ABMHiSEAARICiaIESapCA+ZVISRanJRjRJvVi1lWpbciR7FUtrWWlapW79SNuk73Y3bXf/4L2gFW/b3e3ZnNMu/cN87GMdkQNw5st779x7B0aIwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDMbfG+GGac/jnYKpwfi/wMWWwnHTnsa7BMdNognT5C9ICBhPew5fj78RAunXuM3/OpYKuW9g/M4GWonDPE9VWaYIT6Cel0ii2LK5/5q0IGCDEFPjNcukVFUpJZzIWyKvwA8sipwCV/LYwHyCV02cFEwdi8iyBN7DSVMRxZu9l2BqeJrsZd97nzdliUvwAifJMkEi3AZUUiSd59FErikqxmNVginxAjEkVVU5lMCKYXDCn0+LI1hRBEORFEQIL/I8hss4YlgykU0qSUhQOZWAP0ic7EmqLEmerigoqYF/WAb8hU+4uRPGiiCoavafPrBkkeOoJmCF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',
  },
  {
  label: 'BUSINESS INSURANCE',
    imgPath:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAACWCAMAAADABGUuAAAA+VBMVEX////uGyX//v/+//3uHCQAAAD0np/uGyf+6ur829vtHSPV1dX5tLT3pqfxUFDyf4H91NP5ubrziInb29v4+Pjs7Oyenp75zM3+5OTyR0vm5ubt7e32q62vr6/29vb+8fDwQEPExMS7u7vGxsb5xsbyXl//1TGjo6OFhYVwcHAeHh5ZWVl4eHiVlZX1l5fvMzcTExM5OTlCQkJNTU0sLCzwWFr0j5BVVVUvLy+Kioq0tLT0e3zuLDDyaWrvOj/0c3b8383xZCj/7Mr5oDHuNCf8sC3/6rP/6KX+vy//5JT/+un/yTLxYmnwTCj/3nv0fCz3kS7/22L0dS2PCjtvAAANv0lEQVR4nO1aCXsaORLV0Y1AnA1taGOgORpzg42NEwfb7OaYzEwyx+7//zFbJfXle3Y3jsexXj4TUKvVeqqqVyUBIQYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBq8OnMML87MewGfwgbPnntL3ABBluaC47VIqhaAWvRi2vNdBnXmF8opSQfWfxjZ47ml9H3DuBpcW2DuGEKLKMQr4c8/tqcHhX6UkUlYH9oHi/qMDKXK3sErZndKS/xqsrsGzG1C62OVlwElZFF8Hee5fWimfX/KKpBf+c8/qewBiO5sO9jJpge2zzz2t74VCEu6iSLbgA6+FOndLkcwLGvjw1not1AmpxFa/8BuY6l9FrCM4H4YuDzXNEv97FRWtAi9K7e4y8K/gzZVuffAW9cril9vXsP3mEMmV22DXK4p7V/+OafH7Ljxeo7DQ4+XKLWLUb/Sz775NteqdDmNJF55+Pr/xVJb+yJItYoofZ7rAfBTpLiz99u4FvX8NNXLK5oIWs6qoL+tKL5sgFfw+fnY1Oezi67G57sdVD1/3i6cJ/cKl8RqO0/B5dIufGtZXW+gI6RlDqxsRT9+TvHe9Coyb072uzTy+8x5ktb9Tv6CkPqMaVRQIrf3yqshCc19JyxKONlwBLg314zIStr+rCnptWQ1QldAr5O5Q6WGnytASMKq1X8FVyUZPwkslWoL/MjgLgQ8Vu1zod5yXJW3xyEii5EbDRvfzyhbvkxLGRUMXLClwFIAlco9RR2NbFX/fwjcFTT3J9nCNVhVZ3rDww6WeFa7UUC0IvJOim1PNIXWLXkVJ0qEUqLOMsLrVTOYS7gpuUCcR9Xg7JS+C0Gs8aCuF9s3B44uRN1nqfp6tAsVdJrNdUesMfacg4gJV0MeoI2GxZA7ccmGJhqYupLAstRbwJ2RFLfaZZUkqLN2lAPYZ6r7QwcpxlqIuJdSGIXVLeITBqpXV9ijXlVg63Em9qnm5lQ3Fe5BaS3a7wtFBm4MlptG5gpAZXPZLS55lVaRVLQn38wLtRqvz6E40q9baI7CVEftU6oUCq1ulDKJ6BQ5EW9jor4Raph2PqYPYBcrdnPApIXV0W0dPwbGox4CX9LTrAIFAPfUWdauqPoGvV6ho6fclulzKfR38OXi8vApdAJaOcR5YVjlk6g9xvQhS/6uACLJEhi2pJTZlK9y9FOETCh5jJHsBkaymWQTi5StwjhyPqHPewL1fNz7jCanT/TOMNB5SJ3xLqbYEdikqX7uPOjJe0Z1yogpEIvw1IupFCqZVV9BrOBmKKBogHCVGa0H8deoVILTvB+jXjSuxIyF1apUhOaDPlMDsGXiaj/GTy4DQtRLqOUkhCHKxa0UOv+9fWRtlLEUdFsPKhtruNby7qdOYOlmFy7AUJc66Un+AWG+ATRpqHKTOcigckXu7jgPqeD/1295fAI2q+CVg7uSgrgmpg8NisAJ1/wLCHfyZBcDxEnxR0i7mN0W9sa+0PRktkrl9DIRWQt0R1ibQWUtN4SGrc/BETdBfQXDwYrinAqINfyvUkYp2eEesbqbutMOnyQb/uL0WSyFbEJwQzzxjiTBTw+LSr4HCJRobvWonqFUgLp5oYn4CXbdAFpG6nzw/pg4DY5DzkDorQ0cqt04WXelh6r7TVetOeEBLHK0tC0gDF4SAkZY4gLDg/kyoOwlYga6KERopmsE/39+qLzcQeg4wz3AoZLfhZUxuUuU1VPkSRi3mf+FxsgS6ZwytDl6gsp0ug25QZ8Qt050bWh3oNpYrUCkhSxk04R3Ul/FBqbhYqmzAd7SAQ+9AT4m2Osf9Fiq+pi6r5AYK8bkTtTLpC5sP72909WBYB5SuCKSkVSARdRRzMBMyl1YAc29hHueoPFj/KKur1IeVoBNzT1mdZCWthlZXJSLJOVsc9CJ3d3ID6liJwCskQmwHCVWeDkGGaoLUgfRSgNchdcYzsa0Sq8uLVoRG+mLl46ef0iHAebHrQQG0Abt6lio+QuqWXj2pSjCcGSQ/uoPxMtgcqFiHuZbRYeRV5YbMAXWiDO4o6lxV6Oobn1zxSoIqp63OS6KERY+19TTAobB0caH+GypQa8m11aG7X5JDnyubFtXMQtIkl4PUc09yg8g7E58+pzI9d1cNMF/Vh+oA4n0TtaPD65oEsh6Q81DKsTYMC7xdaPUzF9Qc26LaLaEO6ZlfCuk71PK45zh6kwOFT4NaActKyOuhRLB9eDCkfvwqQHdpqQ1kBX0KCytc3SyPqLOGEEVNPYCZsVhohNjeSx2X7PK3n3/5NSGfK2Q2LWXrXFzFkkThSVjjV8DNVE0vdJENJSJS36BgbXA9du5tq3PiQZLCQhb0Kj794T4VBeKLRCHcC7pF6lFy47xiQXd+RleVnEJFWGcxdZB8i+YU9SzITkwNcl8LZe4+6twffvxy+BOPXNAPwEnU1y5fIcbiw6kUdabSub+C2nRfu9+VlGD2qJDl2RXGe7jHuObwEK2QDy3Yvvg4R/VQBuqCyXgoha+NjCGNR+DLpKTJ4mL7Qp7p4GS8ilETUcfxhzLaLKAOYRHNq9ICUQHqkWHZdR0A8Sn99unw9/c83iEr6r9WQbISuSyqA1oN1N1GS7m9zsu4Z5NetH3BFAT3gnYxkqrmwptbeDfmBdh5+Pr5ZfoVVBI0YuurxfB0BZqu5nxUEweTqOZAArQolMAh9WwXRCiDXx+u6FWAoUXclqW85r68rsaB7n8cHh5+/pXpFAtd3v/+J+axZKNTBGUPqXP0cKVtOxiLQdXuQ/jJFp7lDvX4ZdzUbPzY6iyizri7gUj1UJuoWC2DwMEtZgOnCmJ/UXWgQWDFxNm1ag7cmQ0lJPWwCHJh30cSq0OQW2oPAIUTbBIzQVDch/DzcdMKO5EYt3ZuuSEFwx8e/uuXzz8BPv9+ePgJtSoJm5TMYSmjNnAWDW3AOcb9Pqyy0NR5toslwM5PrC72o/IS6hGkzrM4OQtUi16qnMO5U1Lf/Qj6Vc8wZXVId92G3t2G5gOvqYDShtSZu1VWB6remUpFgnYLPpqhkPpmwUqVmeFA7IzSj39+OYzxAUW0lJxpcF/95CB5n8OcE+8FXfWLBPwLW9RPFNQnr+LFr/qaVwkzn9solrdnTnKFNwrVZbVQ0ZHH8aaIq1+pxPdFDT7BP02dY4dwlGyQWZYzgcujjgnuOF1mUBbIj398+PTly5efP/z7I27JU3UJCkSiBeG68+Ski0cNPFQhlC/Ok1M4zkm8q0hripbW5ArjLEk2qbPJW4d1ql/SwlOHhxjp8GwWze/h400YplK9UDlaxicxO/eBo8hHWu5qv6cXv/mO3d83PfVrcn2T01840dT9dC7wtlgxYp2qAi4u5H5ksFxOrTT3guKlCLcMpUeOsX4Q+LtusZH1fa/R2tfHruoA7zX8poIwVaBItSdVxK9uZYEfFGBeRx20UlWXC1HyXofJNXLLlZZ3KYaB+0p+MajBuV/YQDLvVhuviLWGOjdg/mPfyH1jdPYe6eA21X+1J5wDZ49/Efk/o1a7b+qj9vXPB/3xvJ9uGNi4OE07/zQze1q4g8nk+Khz97rOrq1JrT49r4/ttCe0Z7iTyB895h1/S4yPa2SvR8jJ+e2veGt2uq2zXgPD3jTd41y5xbv5087xSeCORx39bjS7bbnRJP2p9ob0a7VpOgbcqYr1ee/pZvhkOF88dPX0XfpTvt606+t6uqm2xlfXbn77mT01BvbBA1dvqFe+3rOPr7t2Xy3EYH39tv5LWIl54tH5zrUrnXzeBfnGlYlWpzkZ2ZOw10G/Dc3sfFFruu5iUqsduP36QF3qn9RfAvW2HUVp0+7nF+DAoGs1pDdej0eLE7IGFuvQ9u70xD46tY8nA3JwPLFH+YUNOLKn8Hq8Xs8mpweLAzI4fsiR/j7otKdv6j2ca3/WGS1qU9t120cgZO8mnfzobb8J/r0XR/LYHg/y+d75tDNvt6ens/po2lzb9ZE9cMn5JP92MLCbnZMXk+Ld3sy2getsQN4MTidrMrJByRZ2jYze2Z13oHN5O+o70D6SP2ov2sdNWLH+jMBrz+5AGnx3BM5gN+vj5+Py36Mzspu1E1Y7nfTHi96bZh2UfE7yJ705mdfQH6KOe/YIXg9m56enc+UJY5UfRqByi+kxWnvWt5+ypv32OB9jxTq3z8l0AqI+qg/swZ49aNfJKYR+PUlnb+FzfjLO23Nd6sxUjq+fw5WJTvD2izI6G4077roGlu40bUxn9fZi2pz0yWjE0JVP+/ko2Nvj/vxt382jaffapDNVmj6Dqv4I/g7atcVLyvDuwRykbHAKYj+AsEYLLwZv7SlQmYzI7Hw2Oz2a66yVH9Sn9mgP69t2ZwHd91TeZ/g6P6m1j96R0fTBh/2twE5nvY4qwmtAYG+Ajvymr4SPrEektuj1jkLJPoBk0NeJq7+etPdQADGwD46gsTmeYDbv1+970N8QndublnV9osyMOZ30jk7uv/mR37S+POTrurBHYgeTxfnzzub7InVAUR+ctB/o+cNhERdkB7O9F5ao/08kZzP9dt7+4QL6IUzjQ4tx7fppxY+Ozjwy9MEJmbyY3ci3RW9Re/Pcc3gm9Ov1l3jq9i3Qmx6/KpFLo/eCdiMGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGLxn/AdE69beukiXkAAAAAElFTkSuQmCC',
  }
];
const SolutionService = () => {

            const classes = useStyles();
const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  return (
    <Container className={classes.root} maxWidth={false}>
              <Typography variant='h3' fontWeight={500} align='center' >Digital services & solutions</Typography>    
      <Grid container spacing={{ xs: 3, md: 2 }} className={classes.gridContainer} align='center' >
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} >
            <Card sx={{ maxWidth: 270, borderRadius: 6 }} >
              <CardContent>
        <CardMedia
          component="img"
          height="60" 
          src={ step.imgPath}
          alt="green iguana" 
              />
               </CardContent>  
            <Divider orientation="horizontal" variant="middle" flexItem pb={5} />
<CardContent>
              <Typography variant="subtitle2"  color="primary" fontWeight={500}>
           { step.label}
          </Typography>
      </CardContent>   
      <CardActions  style={{justifyContent: 'center'}}>   
 <IconButton  sx={{ bgcolor: 'secondary.main', color:'#ffffff' }} size="small" >
                  <ArrowForwardIosIcon fontSize="small"/>
              </IconButton>
        </CardActions>     
                </Card>  
  </Grid>
 ))}
      </Grid>
       <CardContent align='center' className={classes.semichart}>
            <CardMedia
          component="img" 
          src='/Images/semichart.png' 
          alt="chart" 
        />
         
      </CardContent>
      <Box className={classes.arrowContainer} >
      <ArrowUpwardIcon onClick={scrollToTop} color='secondary'/>
      <Typography variant='body' fontWeight={300} className={classes.backup}>BACK UP</Typography>
      </Box>
      </Container>
    )
}

export default SolutionService
