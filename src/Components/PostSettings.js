/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState, useEffect } from 'react';
import DarkeningOverlay from '../Templates/DarkeningOverlay';
import Flexbox from './Flexbox';


const PostSettings = () => {
    function useImperativeDisableScroll({ element, disabled }) {
        useEffect(() => {
            if (!element) {
                return
            }
            
            console.log('stop scroll');

            element.style.overflowY = disabled ? 'hidden' : 'scroll'
    
            return () => {
                element.style.overflowY = 'scroll'
            }
        }, [disabled])
    }
    useImperativeDisableScroll({
        element: document.scrollingElement,
        disabled: true
    })
    return ( 
        <DarkeningOverlay>
            <Flexbox style={css`justify-content: space-around; align-items: center; height: 100%`}>
                <div css={css`
                background-color: white;
                min-width: 260px;
                @media (min-width: 736px){ width: 400px }; 
                height: 288px;
                max-height: calc(100% - 40px); 
                border-radius: 12px;`}>
                </div>
            </Flexbox>
        </DarkeningOverlay>
    );
}
 
export default PostSettings;