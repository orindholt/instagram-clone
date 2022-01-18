/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

import { Link } from "react-router-dom";
import Logo from "../Components/Logo";
import SearchBar from "../Components/SearchBar";
import NavIcons from "./NavIcons";

const Nav = () => {
    return ( 
        <nav css={css`
          font-size: 22px; 
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1000px;
          width: 100%;
          margin: 0 auto;
          padding: 0 30px;
        `}>
            <Link to="/"><Logo /></Link>
            <SearchBar />
            <NavIcons />
        </nav>
     );
}

export default Nav;