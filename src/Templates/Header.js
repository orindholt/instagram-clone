import Logo from "../Components/Logo";
import SearchBar from "../Components/SearchBar";
import Nav from "../Components/Nav"

/** @jsxImportSource @emotion/react */
import { colors, sizes } from "../Components/Theme";
import {css} from "@emotion/react";

const Header = () => {
    return ( 
        <header css={css`
        height: 60px;
        display: flex;
        flex-direction: rows;  
        `}>
            <Logo />
            <SearchBar />
            <Nav />
        </header>

     );
}
 
export default Header;