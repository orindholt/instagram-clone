/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { colors, sizes, gradients } from "../Components/Theme";

const style = css`
  max-width: 615px;
  width: 100%;
  border: 1px solid ${colors.black};
  margin: 10%;
`;

const Post = () => {
  return (
    <article css={style}>
      <div css={css`display: flex; align-items: center; padding: 14px 16px`}>
        <img 
          src="http://www.alluserpics.com/data/media/6/01412.jpg" 
          alt="" 
          css={css`width: 32px; height: 32px; border-radius: 50%`}
        />
        <h2 css={css`margin-right: auto`}>title</h2>
        <IoEllipsisHorizontal />
      </div>
      <img 
        src="https://vetexplainspets.com/wp-content/uploads/2020/06/edited-why-do-dogs-wink-1-of-4-1024x681.jpg" 
        alt="" 
        css={css`height: 615px; object-fit: cover`}
      />
    </article>
  );
}
 
export default Post;