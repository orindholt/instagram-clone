/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import { colors } from "./Theme";
import { IoSearchOutline } from "react-icons/io5";

const SearchIcon = () => {
  return (
    <label 
        htmlFor="search"
        css={css`cursor: text; display: flex; color: ${colors.gray}`}
    >
        <IoSearchOutline />
    </label>
  );
}
 
export default SearchIcon;