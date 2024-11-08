import styled from "styled-components";

export const FooterStyled = styled.footer`
  padding-left: 24px;
  padding-top: 64px;
  padding-right: 55px;
  padding-bottom: 80px;

  text-align: left;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding-left: 33px;
    padding-top: 183px;
    padding-right: 39px;
    padding-bottom: 85px;
  }
`;

export const TextCon = styled.div`
  @media (min-width: 768px) {
    width: 326px;
  }
`;

export const Text = styled.p`
  margin-top: 32px;
  margin-bottom: 64px;

  font-family: "IBMreg";
  font-size: 16px;
  line-height: 1.63;
  color: #191826;

  & > span {
    font-family: "IBMbold";
  }
`;

export const IconsCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

