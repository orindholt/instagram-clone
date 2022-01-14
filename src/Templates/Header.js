// Components/templates
import Logo from "../Components/Logo";
import SearchBar from "../Components/SearchBar";
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
            position: sticky;
            top: 0px;
            height: 60px;
            background-color: white;

            display: flex;
            align-content: center;
            justify-content: space-between;
            `}>
                <div css={css`
                width: 935px;
                margin: auto;
                padding-left: 20px;
                padding-right: 20px;
                
                display: flex;
                flex-direction: rows;  
                justify-content: space-between;
                align-content: center;

                `}>
                <Link to="/"><Logo /></Link>
                <SearchBar />
                <Nav />
                </div>
            </header>
        </>

     );
}
 
export default Header;