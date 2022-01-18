/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import SearchIcon from "./SearchIcon";
import { colors, sizes } from "./Theme";

const SearchBar = () => {
    const [ inFocus, setInFocus ] = useState(false);
    const [ value, setValue ] = useState("");
    return ( 
        <form css={ css`
            height: 34px;
            width: 209px;

            background-color: ${colors.lightGray};
            border-radius: 7px;
            padding: 0 16px;
            display: flex;
            align-items: center;
            gap: 10px;
        `}>
            {!inFocus && <SearchIcon />}
            <input 
                value={value}
                onChange={(e)=>{setValue(e.target.value)}}
                css={css`
                    background-color: ${colors.lightGray};
                    font-size: ${sizes.small};
                    &::placeholder {
                        font-size: ${sizes.medium};
                        font-weight: 300;
                    }
            `}
            onFocus={()=>{setInFocus(true)}}
            onBlur={()=>{setInFocus(false)}}
            type="text" placeholder="Søg" name="search" id="search" />
        </form>
     );
}

export default SearchBar
