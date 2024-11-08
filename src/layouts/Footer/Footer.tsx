import logo from "../../assets/icons/logo.svg"
import fbIcon from "../../assets/icons/fb.svg"
import instIcon from "../../assets/icons/inst.svg"
import twitterIcon from "../../assets/icons/twitter.svg"

import * as SC from "./FooterStyled"

const Footer:React.FC = () => {
    return (
      <SC.FooterStyled>
        <SC.TextCon>
          <img src={logo} alt="logo" />
          <SC.Text>
            All rights reserved © Equalizer 2021 Have any problems? Contact us
            via social media or email us at <span>equalizer@example.com</span>
          </SC.Text>
        </SC.TextCon>
        <SC.IconsCon>
          <img src={fbIcon} alt="fb" />
          <img src={instIcon} alt="inst" />
          <img src={twitterIcon} alt="twitter" />
        </SC.IconsCon>
      </SC.FooterStyled>
    );
}
 
export default Footer;