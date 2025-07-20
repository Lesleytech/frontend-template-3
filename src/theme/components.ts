import { ThemeConfig } from 'antd';
import { NonUndefined } from 'utility-types';

export const getComponentsConfig = (params: {
  token: NonUndefined<ThemeConfig['token']>;
  colorMode: 'light' | 'dark';
  isMobile: boolean;
}): ThemeConfig['components'] => {
  return {};
};
