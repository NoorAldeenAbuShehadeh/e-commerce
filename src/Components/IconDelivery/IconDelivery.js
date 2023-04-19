

import React from 'react';



import { styled } from '@mui/material/styles';

const IconDelivery1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `40px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});


const Vector3 = styled('img')({
  height: `20px`,
  width: `31.67px`,
  position: `absolute`,
  left: `3px`,
  top: `8px`,
});

function IconDelivery(props) {
  return (
    <IconDelivery1 className={props.className}>
      <Vector3 src="del.png" loading="lazy" alt={'Vector'} /> 
    </IconDelivery1>
  );
}

export default IconDelivery;
