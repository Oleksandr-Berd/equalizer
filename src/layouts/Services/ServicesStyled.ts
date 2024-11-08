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
