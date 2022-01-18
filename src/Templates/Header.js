// Components/templates
import Nav from "../Components/Nav"

// Style
/** @jsxImportSource @emotion/react */
import { colors, sizes } from "../Components/Theme";
import {css} from "@emotion/react";

// Link
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <>
            <header css={css`
                position: fixed;
                top: 0px;
                height: 60px;
                width: 100%;
                border-bottom: 1px solid ${colors.lightGray};
                
                background-color: white;
                
                margin: auto;
                display: flex;
                align-items: center;
            `}>
                <Nav />
            </header>
        </>

     );
}
 
export default Header;