//imported libraries
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'

import { colors, sizes, gradients } from './Theme'

//imported icons
import { IoHeartOutline, IoHeart } from 'react-icons/io5'

const Heart = ({func}) => {
  const [isHeart, setIsHeart] = useState(false)

  const manageState = () => {
    setIsHeart(!isHeart)
    func(isHeart);
  }

  return (
    <div
      css={css`
        user-select: none;
        color: ${isHeart && colors.red};
        cursor: pointer;
        &:hover {
          ${!isHeart && `color: ${colors.lightGray}`}
        }
      `}
      onClick={manageState}
    >
      {isHeart ? <IoHeart /> : <IoHeartOutline />}
    </div>
  )
}

export default Heart
