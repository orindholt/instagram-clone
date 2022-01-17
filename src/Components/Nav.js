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
            <Link to="/">< AiFillHome css={Style} /></Link>
            <Link to="*">< FiSend  css={Style} /></Link>
            <Link to="*">< FiPlusSquare css={Style} /></Link>
            <Link to="*">< AiOutlineCompass css={Style} /></Link>
            <Link to="*">< FiHeart css={Style} /></Link>
            <Link to="profile"> <img
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
              alt="Profile"
              css={css`
              width: 22px;
              height: 22px;
              margin-left: 22px;
              border-radius: 50%;
              border: 1px solid ${colors.lightGray};
            `} /> </Link>
        </div>
     );
}
 
const Style = css`
  margin-left: 22px;
  cursor: pointer;
`;

export default Nav;