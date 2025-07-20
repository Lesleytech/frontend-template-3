import { css } from '@emotion/react';
import { GlobalToken } from 'antd/es/theme/interface';

export const globalStyles = (token: GlobalToken) => css`
  html {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${token.colorBgContainer} !important;
    --transition-anim: cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  body {
    background: ${token.colorBgContainer} !important;
    color: ${token.colorText};
    min-height: 100vh;
  }
`;
