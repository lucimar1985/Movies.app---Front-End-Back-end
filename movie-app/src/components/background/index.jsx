
import { BackgroundImage, BackgoundLinear } from "./style";



// eslint-disable-next-line react/prop-types
export const Background = ({ children, imageBanner }) => {
  return <BackgroundImage bgImage={imageBanner}>
    <BackgoundLinear>

    {children}
    </BackgoundLinear>
    
    
    </BackgroundImage>;
};
