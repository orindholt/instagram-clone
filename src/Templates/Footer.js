/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors, sizes } from '../Components/Theme'

const Footer = ({style}) => {
  return (
    <footer
      css={css`
        color: ${colors.lightGray};
        font-size: ${sizes.smallest};
        display: flex;
        flex-direction: column;
        gap: 10px;
        line-height: 1.5;
        margin: 30px 0;
        ${style}
      `}
    >
      <p>
        About · Help · Press · API · Jobs · Privacy · Terms · Locations · Top Accounts · Hashtags
        · Language · English
      </p>
      <p>{`© ${new Date().getFullYear()} INSTAGRAM FROM META`}</p>
    </footer>
  );
}
 
export default Footer;