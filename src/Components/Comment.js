/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom';
import Heart from './Heart';
import { colors } from './Theme';

const Comment = ({username, value}) => {
  return (
    <div
      css={css`
        display: flex;
        gap: 5px;
      `}
    >
        <Link
          to="/profile"
          css={css`
            font-weight: 600;
          `}
        >
          {username}
        </Link>
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
        <div css={css`margin-left: auto`}><Heart /></div>
    </div>
  );
}
 
export default Comment;