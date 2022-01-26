/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors } from '../Components/Theme'
import userImg from '../assets/userimg.jpg'

const ProfileIcon = ({ size = '32px' }) => {
  return (
    <img
      src={userImg}
      alt="Profile"
      css={css`
        width: ${size};
        height: auto;
        border-radius: 50%;
        border: 1px solid ${colors.lighterGray};
      `}
    />
  )
}

export default ProfileIcon
