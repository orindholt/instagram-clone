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
            max-width: 935px;
            
            background-color: white;
            
            margin: auto;
            padding-left: 20px;
            padding-right: 20px;
            
            display: flex;
            justify-content: space-between;
            flex-direction: rows;  
            align-items: center;
            `}>
                <Link to="/"><Logo /></Link>
                <SearchBar />
                <Nav />
            </header>
        </>

     );
}
 
export default Header;