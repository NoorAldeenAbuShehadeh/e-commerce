

import React from 'react';
import { styled } from '@mui/material/styles';


const IconReturn1 = styled('div')({
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


const Vector1 = styled('img')({
  height: `11.64px`,
  width: `26.67px`,
  position: `absolute`,
  left: `7px`,
  top: `7px`,
});

const Vector2 = styled('img')({
  height: `11.64px`,
  width: `26.67px`,
  position: `absolute`,
  left: `7px`,
  top: `22px`,
});

function IconReturn(props) {
  return (
    <IconReturn1 className={props.className}>
      <Vector1 src="ret1.png" loading="lazy" alt='Vector' />
      <Vector2 src="ret2.png" loading="lazy" alt='Vector' />
    </IconReturn1>
  );
}

export default IconReturn;
