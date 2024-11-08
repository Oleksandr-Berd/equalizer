import styled from "styled-components";

export const SharedLayoutStyled = styled.div`
  padding-left: 24px;
  padding-top: 40px;
  padding-right: 24px;

  text-align: left;
  /* background: linear-gradient(to bottom, #40fff6, #ff9201); */
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50vw; /* Covers only the left half */
  height: 75vh; /* Covers 3/4 of the page height */
  background: linear-gradient(
    to bottom,
    #40fff6,
    /* Top cyan color */ #a4efc1,
    /* Soft green transition */ #f9e29c /* Light orange near the bottom */
  );
  z-index: -1; /* Place behind content */
  border-radius: 10px;
  opacity: 0.3;
`;