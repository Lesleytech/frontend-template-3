import Color from 'color';

import { ColorMode } from '~/lib/types/colorMode';

export function getResolvedColorMode(colorMode: ColorMode): Exclude<ColorMode, 'system'> {
  if (colorMode === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  return colorMode;
}

export function lightenColor(color: string, ratio: number) {
  return Color(color).lighten(ratio).string();
}

export function getAlphaColor(color: string, alpha: number) {
  return Color(color).alpha(alpha).string();
}

export function scrollIntoView(selector: string) {
  const element = document.querySelector(selector);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
