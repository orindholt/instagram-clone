/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import { colors } from './Theme';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 3px solid ${colors.lighterGray};
    border-color: ${colors.lighterGray} transparent ${colors.lighterGray} transparent;
    animation: ${spinAnimation} 1.2s linear infinite;
  }
`;

const LoadIcon = () => {
  return (
    <div css={style}></div>
  );
}
 
export default LoadIcon;