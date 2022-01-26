// Style
/** @jsxImportSource @emotion/react */
import { colors, sizes } from "../Components/Theme";
import {css} from "@emotion/react";

// Link
import { Link } from "react-router-dom";
import { RiSettings4Fill } from "react-icons/ri";
import useApi from './useApi';

const username = "Username"
const test = "5"


const ProfileDetails = () => {
    const data = useApi()
    console.log(data);
    return ( 
        <section
            css={ css`
            width: 835px;
            margin: auto;
            padding-top: 30px;
            padding-left: 20px;
            padding-right: 20px;

            display: flex;
            flex-direction: row;
            `}
            >
            <div>
                <Link to="profile"> <img
                src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
                alt="Profile"
                css={css`
                height: 150px;
                width: 150px;
                margin-left: 22px;
                margin-right: 100px;
                border-radius: 50%;
                border: 1px solid ${colors.lighterGray};
                `} /> </Link>
            </div>
            <div
              css={ css`
              height: 75px;
              width: 600px;
              display: flex;
              flex-direction: column;;
          `}>
                <div
                css={ css`
                margin-bottom: 20px;
                display: flex;
               `}>
                    <p
                    css={ css`
                    margin-right: 22px
                    `}>{data && data[0].username}</p>
                    <button
                    css={ css`
                    color: ${colors.black};
                    border: 1px solid ${colors.lighterGray};
                    border-radius: 3px;
                    margin-right: 22px;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    padding-left: 9px;
                    padding-right: 9px;
                    `}
                    >Rediger profil</button>
                    <RiSettings4Fill css={ css`
                        align-self: center;
                        cursor: pointer;
                        font-size: 22px;
                    
                    `} />
                </div>
                <div
                    css={ css`
                    margin-bottom: 20px;
                    display: flex;
                    flex-direction: row;
                 `}>
                    <p css={Style}>3 opslag</p>
                    <p css={Style}>0 følgere</p>
                    <p css={Style}>1 fulgte</p>
                </div>
            </div>
            <br />
        </section>
     );
}

const Style = css`
  margin-right: 22px;
  cursor: pointer;
`;

export default ProfileDetails;