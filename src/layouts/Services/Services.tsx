import mobilePic from "../../assets/pic/mobile.svg";
import appleIcon from "../../assets/icons/apple.svg"
import androidIcon from "../../assets/icons/android.svg"

import * as SC from "./ServicesStyled";

const Services: React.FC = () => {
  return (
    <SC.ServicesLayout>
      <SC.ImageCon>
        <img src={mobilePic} alt="mobile" />
      </SC.ImageCon>
      <SC.Menu>
        <SC.MenuTitle>Premium EQ</SC.MenuTitle>
        <SC.MenuText>
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </SC.MenuText>
        <SC.PriceCon>
          <SC.Price>$4</SC.Price>
          <p>/ month</p>
        </SC.PriceCon>
        <SC.BtnCon>
          <button>
            <img src={appleIcon} alt="apple" />
            iOS Download
          </button>
          <button>
            <img src={androidIcon} alt="android" />
            Android Download
          </button>
        </SC.BtnCon>
      </SC.Menu>
    </SC.ServicesLayout>
  );
};

export default Services;
