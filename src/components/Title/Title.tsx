import * as SC from "./TitleStyled"

const Title:React.FC = () => {
    return (
      <SC.TitleCon>
        <SC.TitleStyled>We make your music sound extraordinary.</SC.TitleStyled>
        <SC.TextStyled>
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </SC.TextStyled>
      </SC.TitleCon>
    );
}
 
export default Title;