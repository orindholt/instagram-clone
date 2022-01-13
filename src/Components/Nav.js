import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineCompass } from "react-icons/ai";
import { FiSend, FiPlusSquare, FiHeart } from "react-icons/fi";
//import { IoHeartOutline } from "react-icons/io";
/** @jsxImportSource @emotion/react */
import { colors, sizes } from "./Theme";
import {css} from "@emotion/react";

const Nav = () => {
    return ( 
        <div css={css`
        font-size: 22px; 
        `}>
            < AiFillHome />
            < FiSend css={css`
            margin: 20px;
            `}/>
            < FiPlusSquare />
            < AiOutlineCompass />
            < FiHeart />
            <article
    ></article>
        </div>
     );
}
 


export default Nav;