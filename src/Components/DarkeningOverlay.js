/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState, useEffect } from 'react';

const DarkeningOverlay = (props,{ setPostSettings }) => {

  function handleOnClick(e){
    console.log('target:');
    console.log(e.target);
    console.log('currentTarget:');
    console.log(e.currentTarget);
    if(e.target === e.currentTarget){
      props.setPostSettings(false)
    }
  }

    console.log(props);
    return ( 
        <div className='stopScroll'
          onClick={handleOnClick}
          css={css`
            z-index: 100;
            display: flex;
            justify-content: space-around;
            align-items: center;
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