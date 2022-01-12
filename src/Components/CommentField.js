/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { colors } from "./Theme";
import { IoAddCircleOutline } from "react-icons/io5";

const CommentField = () => {
  const [value, setValue] = useState("");
  const [enablePost, setEnablePost] = useState(false);
  console.log(value);
  console.log(enablePost);
  return (
    <form css={css`
      border-top: 1px solid ${colors.lightGray}; 
      padding: 16px; display: flex; 
      align-items: center;
      gap: 16px;
    `}>
      <IoAddCircleOutline css={css`color:${colors.gray}; &:hover{cursor: pointer}`} />
      <input 
        type="text" 
        placeholder="Add a comment" 
        value={value} 
        onChange={(e)=>{
          setValue(e.target.value);
          e.target.value ? setEnablePost(true) : setEnablePost(false);
        }}
        css={css`&::placeholder{color:${colors.gray}}`}
      />
      <button 
        type="submit"
        css={css`
          color: ${enablePost ? colors.blue : colors.lightBlue};
          cursor: ${enablePost ? "pointer" : "auto"};
          margin-left: auto;
        `}
        disabled={!enablePost}
      >
        Post
      </button>
    </form>
  );
}
 
export default CommentField;