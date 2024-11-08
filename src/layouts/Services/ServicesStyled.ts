import styled from "styled-components";

import backImage from "../../assets/pic/back.svg";

export const ServicesLayout = styled.div`
  position: relative;

  min-height: 380px;

  display: flex;

  background-color: #191826;
  background-image: url(${backImage});
  background-repeat: no-repeat;
  background-position: 50%;

  border-radius: 12px;
`;

export const ImageCon = styled.div`
  position: absolute;
  top: 98px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Menu = styled.div`
  margin-top: 380px;

  padding-left: 36px;
  padding-top: 48px;
  padding-right: 37px;
  padding-bottom: 48px;

  text-align: left;

  background-color: #fa7453;
  border-radius: 12px;
`;

export const MenuTitle = styled.h3`
  margin-bottom: 12px;

  font-family: "IBMbold";
  font-size: 32px;
  line-height: 1.25;

  color: #fcfaf9;
`;

export const MenuText = styled.p`
  margin-bottom: 36px;
  font-family: "IBMreg";
  font-size: 18px;
  line-height: 1.56;
  color: #fcfaf9;
`;

export const PriceCon = styled.div`
  display: flex;
  align-items: center;
  & > p {
    font-family: "IBMreg";
    font-size: 20px;
    line-height: 1.6;
    letter-spacing: -0.2px;

    color: #fcfaf9;
  }
`;

export const Price = styled.h4`
  margin-right: 16px;

  font-family: "IBMbold";
  font-size: 65px;
  line-height: 1.25;
  letter-spacing: -0.2px;

  color: #fcfaf9;
`;

export const BtnCon = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 32px;

  & > button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding-top: 15px;
    padding-bottom: 14px;

    border: none;
    border-radius: 12px;

    & > img{
        margin-right: 8px;
    }
  }

  & > button:first-child {
    margin-bottom: 16px;

    background-color: #191826;
    color: #fcfaf9;
  }
`;
