import * as SC from "./SharedLayoutStyled"

import Header from "../Header/Header";
import Title from "../../components/Title/Title";

const SharedLayout = () => {
    return ( 
        <SC.SharedLayoutStyled>
            <SC.GradientOverlay/>
            <Header/>
            <Title/>
        </SC.SharedLayoutStyled>
     );
}
 
export default SharedLayout;