/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors } from '../Components/Theme'

const ProfileIcon = ({ size = '32px' }) => {
  return (
    <img
      src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
      alt="Profile"
      css={css`
        width: ${size};
        height: auto;
        border-radius: 50%;
        border: 1px solid ${colors.lightGray};
      `}
    />
  )
}

export default ProfileIcon
