import logo from "../../assets/icons/logo.svg";
import { ReactComponent as FbIcon } from "../../assets/icons/fb.svg";
import { ReactComponent as InstIcon } from "../../assets/icons/inst.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";

import * as SC from "./FooterStyled";

const Footer: React.FC = () => {
  return (
    <SC.FooterStyled>
      <SC.TextCon>
        <img src={logo} alt="logo" />
        <SC.Text>
          All rights reserved © Equalizer 2021 Have any problems? Contact us via
          social media or email us at <span>equalizer@example.com</span>
        </SC.Text>
      </SC.TextCon>
      <SC.IconsCon>
        <FbIcon />
        <InstIcon />
        <TwitterIcon />
      </SC.IconsCon>
    </SC.FooterStyled>
  );
};

export default Footer;
