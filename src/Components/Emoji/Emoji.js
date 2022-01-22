/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { colors, sizes } from '../Theme';

const Emoji = ({decimal}) => {
  const regex = /([&#;])+/gi;
  return <li 
    css={css`color: ${colors.black}; font-size: ${sizes.big}; cursor: pointer;`}
    dangerouslySetInnerHTML={{__html: decimal}}
  ></li>;
}
 
export default Emoji;