import React from 'react'
import {Button} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const NextButton = ({ title, onClick ,backgroundColor='secondary'}) => {
   
    return (
        <>
            <Button variant="contained" color={backgroundColor} endIcon={<ArrowForwardIcon />} fontSize={10} onClick={onClick} sx={{minWidth:170, justifyContent:'space-around'}}>{title}</Button>

        </>
    )
}

export default NextButton
