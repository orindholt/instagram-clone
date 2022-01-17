/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors } from './Theme';

const Comment = ({username, value}) => {
  return (
    <div
      css={css`
        display: flex;
        gap: 5px;
      `}
    >
        <p
          css={css`
            font-weight: 600;
          `}
        >
          {username}
        </p>
        {value}
        <p
          css={css`
            color: ${colors.gray};
            &:hover {
              cursor: pointer;
            }
          `}
        >
          {' '}
        </p>
    </div>
  );
}
 
export default Comment;