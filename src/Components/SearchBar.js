/** @jsxImportSource @emotion/react */
import { colors, sizes } from "./Theme";
import {css} from "@emotion/react";


const SearchBar = () => {
    return ( 
        <form css={css`color: ${colors.lightGray}`} className="" action="">
            <input type="text" placeholder="Søg" name="search" />
        </form>
     );
}
 
export default SearchBar;