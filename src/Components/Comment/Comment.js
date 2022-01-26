/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Heart from '../Heart';

const Comment = ({username, value}) => {
  const [isLiked, setLiked] = useState(false);
  const getHeartState = (state) => {setLiked(state)}
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
        <p css={css`overflow-x: hidden;`}>
          {value}
        </p>
        <div css={css`margin-left: auto`}><Heart func={getHeartState} /></div>
    </div>
  );
}
 
export default Comment;