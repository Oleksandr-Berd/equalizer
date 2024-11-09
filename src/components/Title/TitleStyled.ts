import styled from "styled-components";

export const TitleCon = styled.div`
  padding-top: 64px;
  padding-bottom: 166px;

  color: #191826;

  @media (min-width: 768px) {
    padding-top: 95px;
    padding-bottom: 249px;
  }

  @media (min-width: 1220px) {
    padding-top: 127px;
    padding-bottom: 321px;
  }
`;

export const TitleStyled = styled.h3`
  margin-bottom: 20px;

  font-family: "IBMbold";
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.45px;

  @media (min-width: 768px){
    margin-bottom: 28px;

    font-size: 64px;
    letter-spacing: -0.73px;
  }

  @media (min-width: 1220px) {
    margin-bottom: 40px;

    font-size: 88px;
    line-height: 1;
    letter-spacing: -1px;
  }
`;

export const TextStyled = styled.p`
  font-family: "IBMreg";
  font-size: 16px;
  line-height: 1.63;

  @media (min-width: 1220px){
    margin-right: 450px;
  }
`;
