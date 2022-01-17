/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Comment from './Comment';
import { colors } from './Theme';

const CommentView = ({state}) => {
  return (
    <>
    <p
      css={css`
        color: ${colors.gray};
        &:hover {
          cursor: pointer;
        }
      `}
    >
      View all 27 comments
    </p>
    {state.map(({name, val}) => {return <Comment username={name} value={val} />})}
    </>
  );
}
 
export default CommentView;