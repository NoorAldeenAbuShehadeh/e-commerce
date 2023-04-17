import React from 'react'
import { Box } from '@mui/system';
const Grids = ({myImage,id,imageClass,boxClass,name,desc,buttonClass,nameClass,descClass}) => {
  return (
        <>
            <img src={myImage} alt={id} className={imageClass} />
            <Box className={boxClass}>
                <div className={nameClass}>{name}</div>
                <div className={descClass}>{desc}</div>
                <a className={buttonClass} href='#'>Shop Now </a>
            </Box> 
        </>
  )
}

export default Grids