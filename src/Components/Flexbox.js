/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Flexbox = (props) => {
  return (
    <div css={css`display: flex; ${props.style}`}>
      {props.children}
    </div>
  );
}
 
export default Flexbox;