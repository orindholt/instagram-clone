/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Emoji from './Emoji';

import { colors, sizes, fontWeight } from '../Theme'


const EmojiCategory = ({data, category, func}) => {
  const getClickEmoji = (emoji) => {func(emoji)};
  return (
    <section>
      <h2 css={css`
        font-weight: ${fontWeight.bold}; 
        color: ${colors.gray}; 
        font-size: ${sizes.semi}; 
        margin-bottom: 5px;
      `}>
        {
          (category.includes("and") ? category.replace("and", "&") : category)
          .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
        }
      </h2>
      <ul css={css`display: grid; grid-template-columns: repeat(7, 1fr);`}>
        {data.map((obj, index) => obj.category === category && <Emoji key={index} decimal={obj.htmlCode[0]} func={getClickEmoji} />)}
      </ul>
    </section>
  );
}
 
export default EmojiCategory;