import mobilePic from "../../assets/pic/mobile.svg"

import * as SC from "./ServicesStyled"

const Services:React.FC = () => {
    return (
      <SC.ServicesLayout>
        <SC.ImageCon>
          <img src={mobilePic} alt="mobile" />
        </SC.ImageCon>
      </SC.ServicesLayout>
    );
}
 
export default Services;