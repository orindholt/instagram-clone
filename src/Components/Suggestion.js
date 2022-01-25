/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ProfileIcon from "./ProfileIcon";
import { colors, fontWeight, sizes } from "../Components/Theme";

const Suggestion = () => {
  return (
    <section css={css`display: flex; gap: 10px; width: 100%;`}>
      <ProfileIcon />
      <div>
        <h4 css={css`font-size: inherit`}>username</h4>
        <p css={css`font-size: ${sizes.smaller}; color: ${colors.gray}`}>Follows you</p>
      </div>
      <button css={css`color: ${colors.blue}; margin-left: auto; font-weight: ${fontWeight.bold}`}>Follow</button>
    </section>
  );
}
 
export default Suggestion;