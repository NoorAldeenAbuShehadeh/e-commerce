

import React from 'react';
import { styled } from '@mui/material/styles';
import UnderLine from '../UnderLine/UnderLine';
import IconDelivery from '../IconDelivery/IconDelivery';
import IconReturn from '../IconReturn/IconReturn';

const Frame9111 = styled('div')({
  border: `1px solid rgba(0, 0, 0, 0.5)`,
  boxSizing: `border-box`,
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `180px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  overflow: `hidden`,
});

const UnderLine1 = styled(UnderLine)(({ theme }) => ({
  width: `399px`,
  height: `0px`,
  position: `absolute`,
  left: `0px`,
  top: `90px`,
}));

const Frame915 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `16px`,
  top: `24px`,
});

const IconDelivery1 = styled(IconDelivery)(({ theme }) => ({
  width: `40px`,
  height: `40px`,
  margin: `0px`,
}));

const Frame913 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 16px`,
});

const FreeDelivery = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `500`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `0px`,
}));

const EnterYourPostalCodeF = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `500`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `underline`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
});

const Frame914 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `16px`,
  top: `106px`,
});

const IconReturn1 = styled(IconReturn)(({ theme }) => ({
  width: `40px`,
  height: `40px`,
  margin: `0px`,
}));

const Frame912 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 16px`,
});

const ReturnDelivery = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `500`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Free30DaysDeliveryReSpan1 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `500`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
});

const Free30DaysDeliveryReSpan2 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `500`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `underline`,
  lineHeight: `18px`,
  textTransform: `none`,
});

const Free30DaysDeliveryRe = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `500`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
});

function Frame911(props) {
  return (
    <Frame9111 className={props.className}>
      <UnderLine1 />
      <Frame915>
        <IconDelivery1 />
        <Frame913>
          <FreeDelivery>{`Free Delivery`}</FreeDelivery>
          <EnterYourPostalCodeF>
            {`Enter your postal code for Delivery Availability`}
          </EnterYourPostalCodeF>
        </Frame913>
      </Frame915>
      <Frame914>
        <IconReturn1 />
        <Frame912>
          <ReturnDelivery>{`Return Delivery`}</ReturnDelivery>
          <Free30DaysDeliveryRe>
            <Free30DaysDeliveryReSpan1>{`Free 30 Days Delivery Returns. `}</Free30DaysDeliveryReSpan1>
            <Free30DaysDeliveryReSpan2>{`Details`}</Free30DaysDeliveryReSpan2>
          </Free30DaysDeliveryRe>
        </Frame912>
      </Frame914>
    </Frame9111>
  );
}

export default Frame911;
