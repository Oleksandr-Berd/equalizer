import styled from "styled-components";

import tabletHeaderPic from "../../assets/pic/tabletHeaderPic.svg"

export const SharedLayoutStyled = styled.div`
  padding-left: 24px;
  padding-top: 40px;
  padding-right: 24px;

  text-align: left;

  @media (min-width: 768px){
    padding-left: 39px;
    padding-top: 62px;
    padding-right: 216px;
  }
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50vw;
  height: 75vh;
  background: linear-gradient(
    to bottom,
    #40fff6,
    /* Top cyan color */ #a4efc1,
    /* Soft green transition */ #f9e29c /* Light orange near the bottom */
  );
  z-index: -1;
  border-radius: 10px;
  opacity: 0.3;

  @media (min-width: 768px) {
    background-image: url(${tabletHeaderPic});
    background-repeat: no-repeat;
    background-position: top right;
    opacity: 1;
  }
`;