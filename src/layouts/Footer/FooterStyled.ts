import styled from "styled-components";

export const FooterStyled = styled.footer`
padding-left: 24px;
padding-top: 64px;
padding-right: 55px;
padding-bottom: 80px;

text-align: left;
`

export const Text = styled.p`
  margin-top: 32px;
  margin-bottom: 64px;

  font-family: "IBMreg";
  font-size: 16px;
  line-height: 1.63;
  color: #191826;

  & > span{
    font-family: "IBMbold";
  }
`;

export const IconsCon = styled.div`
display: flex;
flex-direction: row;
align-items: center;

& > *:not(:last-child){
    margin-right: 20px;
}
`