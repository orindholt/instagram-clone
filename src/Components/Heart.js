//imported libraries
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'

import { colors, sizes, gradients } from './Theme'

//imported icons
import { IoHeartOutline, IoHeart } from 'react-icons/io5'

const Heart = () => {
  const [isHeart, setIsHeart] = useState(false)
  const [count, setCount] = useState(0)

  const manageState = () => {
    setIsHeart(!isHeart)
    setCount(isHeart ? count - 1 : count + 1)
    console.log(count)
  }

  return (
    <div
      css={css`
        color: ${isHeart && colors.red};
      `}
      onClick={manageState}
    >
      {isHeart ? <IoHeart /> : <IoHeartOutline />}
    </div>
  )
}

export default Heart
