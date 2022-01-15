/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const DarkeningOverlay = (props) => {
    return ( 
        <div className='stopScroll' 
         css={css`
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 65%);
         `}>
         {props.children}
      </div>
     );
}
 
export default DarkeningOverlay;