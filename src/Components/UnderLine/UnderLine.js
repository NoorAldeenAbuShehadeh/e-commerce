

import React from 'react';
import { styled } from '@mui/material/styles';

const UnderLine1 = styled('div')({
  opacity: `0.5`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `0px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Line1 = styled('div')({
  border: `1px solid rgba(0, 0, 0, 1)`,
  width: `399px`,
  height: `0px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

function UnderLine(props) {
  return (
    <UnderLine1 className={props.className}>
      <Line1></Line1>
    </UnderLine1>
  );
}

export default UnderLine;
