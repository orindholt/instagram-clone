/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const DarkeningOverlay = ({ setPostSettings, children }) => {

  function handleOnClick(e){
    if(e.target === e.currentTarget){
      setPostSettings(false)
    }
  }
    return ( 
        <div className='stopScroll'
          onClick={handleOnClick}
          css={css`
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 65%);
         `}>
         {children}
      </div>
     );
}
 
export default DarkeningOverlay;