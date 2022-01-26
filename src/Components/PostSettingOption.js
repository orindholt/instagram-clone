/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors, fontWeight, sizes } from './Theme'
import Flexbox from "./Flexbox";


const PostSettingOption = (props) => {
    return ( 
        <Flexbox style={css`
        width: 100%; 
        height: calc(100% / 6); 
        border-bottom: 1px solid ${colors.lighterGray}; 
        font-weight: ${fontWeight.light};
        font-size: ${sizes.small};
        justify-content: space-around; 
        align-items: center;
        :first-of-type{
            color: red;
            font-weight: ${fontWeight.bold};
        }`}>
            {props.children}
        </Flexbox>
     );
}
 
export default PostSettingOption;