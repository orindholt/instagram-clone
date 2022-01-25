/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState, useEffect } from 'react';
import DarkeningOverlay from '../Components/DarkeningOverlay';
import Flexbox from '../Components/Flexbox';
import PostSettingOption from '../Components/PostSettingOption';


const PostSettings = ({ setPostSettings }) => {
    

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
        <DarkeningOverlay setPostSettings={setPostSettings}>
                <div css={css`
                background-color: white;
                min-width: 260px;
                @media (min-width: 736px){ width: 400px }; 
                height: 288px;
                max-height: calc(100% - 40px); 
                border-radius: 12px;`}>
                    <PostSettingOption>
                        <p>Slet</p>
                    </PostSettingOption>
                    <PostSettingOption>
                        <p>Gå til opslag</p>
                    </PostSettingOption>
                    <PostSettingOption>
                        <p>Del her:</p>
                    </PostSettingOption>
                    <PostSettingOption>
                        <p>Kopiér link</p>
                    </PostSettingOption>
                    <PostSettingOption>
                        <p>Indlejr</p>
                    </PostSettingOption>
                    <PostSettingOption>
                        <p>Annuler</p>
                    </PostSettingOption>
                </div>
        </DarkeningOverlay>
    );
}

export default PostSettings;