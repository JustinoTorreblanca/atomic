import styled from "styled-components";
import { typography, variant, color, space } from "styled-system";

const asMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1Regular: "p",
  body1Bold: "p",
  btnPrimary: "span",
  btnSecondary: "span",
  c1: "p",
  c2: "span",
  c3: "span",
  c4: "span",
};

const Typography = styled.span.attrs((props) => ({
  as: asMap[props.variant || "span"],
}))`
  ${typography}
  ${space}
  ${color}
  ${variant({
    variants: {
      h1: {
        fontFamily: "Montserrat",
        fontWeight: "800",
        fontSize: "61px",
      },
      h2: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: "57px",
      },
      h3: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: "54px",
      },
      h4: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontStyle: "normal",
        fontSize: "46px",
      },
      h5: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontStyle: "normal",
        fontSize: "43px",
      },
      h6: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontStyle: "normal",
        fontSize: "41px",
        lineHeight: "30px",
      },
      body1Bold: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: "35px",
      },
      body2Bold: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: "32px",
      },
      body3Bold: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: "30px",
      },
      body4Bold: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: "28px",
      },
      body5Bold: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: "24px",
      },
      body1: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: "18px",
      },
      caption1ExtraBold: {
        fontFamily: "Montserrat",
        fontWeight: "900",
        fontSize: "24px",
      },
      caption1: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: "24px",
      },
      caption2: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: "18px",
      },
      caption3: {
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontSize: "18px",
      },
      caption4: {
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontSize: "14px",
      },
      caption5: {
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontSize: "20px",
      },
      caption6: {
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontSize: "28px",
      },
      caption7: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: "20px",
      },
      caption8: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: "14px",
      },
      caption9: {
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontSize: "12px",
      },

      btnPrimary: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontStyle: "normal",
        fontSize: "30px",
        lineHeight: "30px",
      },
      btnSecondary: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontStyle: "normal",
        fontSize: "18px",
        lineHeight: "18px",
      },
      default: {
        fontFamily: "Montserrat",
        fontSize: "16px",
        fontWeight: "normal",
        lineHeight: "16px",
      },
    },
  })}
`;

export default Typography;
