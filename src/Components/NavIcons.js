/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { Link } from 'react-router-dom'

import { AiFillHome, AiOutlineCompass } from 'react-icons/ai'
import { FiSend, FiPlusSquare, FiHeart } from 'react-icons/fi'
import { colors } from './Theme'

const NavIcons = () => {
  return (
    <div
      css={css`
        display: flex;
        gap: 22px;
      `}
    >
      <Link to="/">
        <AiFillHome />
      </Link>
      <Link to="*">
        <FiSend />
      </Link>
      <Link to="*">
        <FiPlusSquare />
      </Link>
      <Link to="*">
        <AiOutlineCompass />
      </Link>
      <Link to="*">
        <FiHeart />
      </Link>
      <Link to="user">
        <img
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
          alt="Profile"
          css={css`
            width: 22px;
            height: 22px;
            border-radius: 50%;
            border: 1px solid ${colors.lightGray};
          `}
        />
      </Link>
    </div>
  )
}

export default NavIcons
