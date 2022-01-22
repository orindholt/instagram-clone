/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import useEmojiFetch from './useEmojiFetch'

import LoadIcon from '../LoadIcon';
import EmojiCategory from './EmojiCategory';

const categories = [
  "smileys and people",
  "animals and nature",
  "food and drink",
  "travel and places",
  "activities",
  "objects",
  "symbols"
];

const EmojiMenu = () => {
  const data = useEmojiFetch();

  const style = css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 300px;
    border-radius: 10px;
    position: absolute;
    bottom: 50px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 20%);
    padding: 10px;
    user-select: none;
    ${data && "overflow-y: scroll;"};
  `;

  return (
    <div css={style}>
      {
        data ?
        categories.map((category, index) => {
          return <EmojiCategory key={index} data={data} category={category} />
        })
        : <LoadIcon />
      }
    </div>
  );
}

export default EmojiMenu;