/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import ProfileIcon from '../Components/ProfileIcon'
import Suggestion from '../Components/Suggestion'
import { colors, fontWeight, sizes } from '../Components/Theme'
import useApi from '../Templates/useApi'
import Footer from './Footer'

const Suggestions = () => {
  const data = useApi();

  return (
    <aside
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 300px;
        padding: 16px 0 16px 0;
        position: sticky;
        top: 100px;
        height: 800px;
      `}
    >
      <section
        css={css`
          display: flex;
          align-items: center;
          gap: 20px;
          width: 100%;
        `}
      >
        <ProfileIcon size={'56px'} />
        <div
          css={css`
            font-size: ${sizes.small};
          `}
        >
          <h3
            css={css`
              font-size: inherit;
            `}
          >
            {data ? data[0].username : "username"}
          </h3>
          <p>real name</p>
        </div>
        <button
          css={css`
            color: ${colors.blue};
            margin-left: auto;
            font-weight: ${fontWeight.bold};
          `}
        >
          Switch
        </button>
      </section>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin: 30px 0 10px 0;
        `}
      >
        <h2
          css={css`
            font-size: ${sizes.small};
            font-weight: ${fontWeight.bold};
            color: ${colors.gray};
          `}
        >
          Suggestions For You
        </h2>
        <button
          css={css`
            font-weight: ${fontWeight.bold};
          `}
        >
          See All
        </button>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 15px;
          width: 100%;
          padding-left: 10px;
        `}
      >
        <Suggestion />
        <Suggestion />
        <Suggestion />
        <Suggestion />
        <Suggestion />
      </div>
      <Footer />
    </aside>
  )
}

export default Suggestions
