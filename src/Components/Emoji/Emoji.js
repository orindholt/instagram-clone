/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { colors, sizes } from '../Theme';

const Emoji = ({decimal, func}) => {
  return <li 
    onClick={(e)=>{
      func(e.target.textContent);
    }}
    css={css`color: ${colors.black}; font-size: ${sizes.big}; cursor: pointer;`}
    dangerouslySetInnerHTML={{__html: decimal}}
  ></li>;
}
 
export default Emoji;