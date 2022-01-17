/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {
  IoEllipsisHorizontal,
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
  IoBookmarkOutline,
} from 'react-icons/io5'
import { useState } from 'react/cjs/react.development'
import Comment from '../Components/Comment'
import CommentField from '../Components/CommentField'
import CommentView from '../Components/CommentView'
import Flexbox from '../Components/Flexbox'
import Heart from '../Components/Heart'
import { colors, sizes } from '../Components/Theme'

const Post = () => {

  const [comments, setComments] = useState([]);
  const passCommentData = ({name, val}) => {
    let commentObj = {
      name: name,
      val: val
    }
    comments ? setComments([...comments, commentObj]) : setComments([commentObj]);
    console.log(comments);
  };

  return (
    <article
      css={css`
        max-width: 615px;
        width: 100%;
        border: 1px solid ${colors.lightGray};
      `}
    >
      <section
        css={css`
          display: flex;
          align-items: center;
          padding: 14px 16px;
          gap: 16px;
        `}
      >
        <img
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
          alt="Profile"
          css={css`
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 1px solid ${colors.lightGray};
          `}
        />
        <h2
          css={css`
            margin-right: auto;
            font-size: ${sizes.small};
          `}
        >
          username
        </h2>
        <IoEllipsisHorizontal
          css={css`
            &:hover {
              cursor: pointer;
            }
          `}
        />
      </section>
      <img
        src="https://vetexplainspets.com/wp-content/uploads/2020/06/edited-why-do-dogs-wink-1-of-4-1024x681.jpg"
        alt="Post"
        css={css`
          height: 615px;
          object-fit: cover;
        `}
      />
      <section
        css={css`
          padding: 14px 16px;
          font-size: ${sizes.small};
          display: flex;
          flex-direction: column;
          gap: 12px;
        `}
      >
        <Flexbox
          style={css`
            gap: 16px;
            font-size: 24px;
            & > * {
              &:hover {
                cursor: pointer;
                color: ${colors.lightGray};
              }
            }
          `}
        >
          <Heart />
          <IoChatbubbleOutline />
          <IoPaperPlaneOutline />
          <IoBookmarkOutline
            css={css`
              margin-left: auto;
            `}
          />
        </Flexbox>
        <h3
          css={css`
            font-weight: 600;
            font-size: inherit;
          `}
        >
          234 Likes
        </h3>
        <p>
          <span
            css={css`
              font-weight: 600;
            `}
          >
            username{' '}
          </span>
          Lorem ipsum. ...
          <span
            css={css`
              color: ${colors.gray};
              &:hover {
                cursor: pointer;
              }
            `}
          >
            {' '}
            more
          </span>
        </p>
        <CommentView state={comments} />
        <p
          css={css`
            color: ${colors.gray};
            text-transform: uppercase;
            font-size: ${sizes.smallest};
          `}
        >
          14 hours ago
        </p>
      </section>
      <CommentField func={passCommentData} />
    </article>
  )
}

export default Post
