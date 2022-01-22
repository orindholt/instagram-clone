/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { colors, sizes } from "../Theme";
import { IoHappyOutline } from "react-icons/io5";
import EmojiMenu from "../Emoji/EmojiMenu";

const CommentField = (props) => {
	const [value, setValue] = useState("");
	const [enablePost, setEnablePost] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);

	return (
		<form
			css={css`
        position: relative;
				border-top: 1px solid ${colors.lightGray};
				padding: 16px;
				display: flex;
				align-items: center;
				gap: 16px;
			`}
      onSubmit={(e)=>{
        e.preventDefault();
        if(value){
          props.func({name: "username", val: value});
          setValue("");
        }
      }}
		>
			<IoHappyOutline
        onClick={()=>{
          setShowEmojis(!showEmojis);
        }}
				css={css`
          position: relative;
					color: ${colors.gray};
          font-size: ${sizes.big};
          cursor: pointer;
				`}
			/>
      {showEmojis && <EmojiMenu />}
			<input
				type="text"
				placeholder="Add a comment"
				value={value}
				onChange={e => {
					setValue(e.target.value);
					e.target.value ? setEnablePost(true) : setEnablePost(false);
				}}
				css={css`
					&::placeholder {
						color: ${colors.gray};
					}
				`}
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
};

export default CommentField;
