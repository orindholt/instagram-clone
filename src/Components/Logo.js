/** @jsxImportSource @emotion/react */
import { colors, sizes } from "../Components/Theme";
import {css} from "@emotion/react";

import InstagramLogo from "../assets/InstagramLogo.png"
import { Link } from "react-router-dom";

const Logo = () => {
    return ( 
        <img src={InstagramLogo} alt="InstagramLogo" css={css`
        height: 29px;
        width: 103px; 
        cursor: pointer;
        `}/>
     );
}
 
export default Logo;