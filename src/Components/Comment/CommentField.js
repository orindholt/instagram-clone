/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useRef, useState } from 'react'
import { colors, sizes } from '../Theme'
import { IoHappyOutline } from 'react-icons/io5'
import EmojiMenu from '../Emoji/EmojiMenu'

const CommentField = ({ func }) => {
  const [value, setValue] = useState('')
  const [enablePost, setEnablePost] = useState(false)
  const [showEmojis, setShowEmojis] = useState(false)

  const getClickEmoji = (emoji) => setValue(`${value}${emoji}`)

  return (
    <form
      css={css`
        position: relative;
        border-top: 1px solid ${colors.lighterGray};
        padding: 16px;
        display: flex;
        align-items: center;
        gap: 16px;
      `}
      onSubmit={(e) => {
        e.preventDefault()
        if (value) {
          func({ name: 'username', val: value })
          setValue('')
        }
      }}
    >
      <IoHappyOutline
        onClick={() => {
          setShowEmojis(!showEmojis)
        }}
        css={css`
          position: relative;
          color: ${colors.gray};
          font-size: ${sizes.big};
          cursor: pointer;
        `}
      />
      {showEmojis && <EmojiMenu func={getClickEmoji} />}
      <input
        type="text"
        placeholder="Add a comment"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        css={css`
          width: 100%;
          &::placeholder {
            color: ${colors.gray};
          }
        `}
      />
      <button
        type="submit"
        css={css`
          color: ${value ? colors.blue : colors.lightBlue};
          cursor: ${value ? 'pointer' : 'auto'};
        `}
        disabled={!value}
      >
        Post
      </button>
    </form>
  )
}

export default CommentField
