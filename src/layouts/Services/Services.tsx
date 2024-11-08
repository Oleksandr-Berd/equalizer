import mobilePic from "../../assets/pic/mobile.svg";

import * as SC from "./ServicesStyled";

const Services: React.FC = () => {
  return (
    <SC.ServicesLayout>
      <SC.ImageCon>
        <img src={mobilePic} alt="mobile" />
      </SC.ImageCon>
      <SC.Menu>
        <SC.MenuTitle>Premium EQ</SC.MenuTitle>
        <p>
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </p>
        <h4>
          <span>$ 4</span>
          month
        </h4>
      </SC.Menu>
    </SC.ServicesLayout>
  );
};

export default Services;
