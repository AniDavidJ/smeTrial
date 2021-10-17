// import { Link } from '@mui/material';
import React, { useState } from 'react'
import DropdownItem from "./DropdownItem";
import { useStyles } from "./styles";
import Link from 'next/link';
import { ButtonGroup,Button ,Box} from '@mui/material';


const Dropdown = () => {
  const classes = useStyles();

    const [click, setClick] = useState(false);
    const handleClick = () => {
        console.log('nav click');
    }
    console.log("");
    return (
       
            <ul onClick={handleClick} className={classes.viewpop} >
            {DropdownItem.map((item, index) => {
                return (
                    <li key={index} className={classes.oneLine} >
                        <Link href={item.path} onClick={() => setClick(false)} className={item.cName} ><a className={classes.anchorLink}>{item.title}</a></Link>
                    </li>
    //              
                )
            })}
                </ul>
       
    )
}

export default Dropdown
