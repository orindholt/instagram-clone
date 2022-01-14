/** @jsxImportSource @emotion/react */
import { colors, sizes } from "./Theme";
import {css} from "@emotion/react";


const SearchBar = () => {
    return ( 
        <form className="" action="">
            <input css={ css`
            height: 25px;
            width: 236px;

            background-color: ${colors.lightGray};
            border-radius: 5px;
            padding-left: 16px;
            padding-right: 16px;
            `}
             type="text" placeholder="Søg" name="search" />
        </form>
     );
}
 
export default SearchBar;