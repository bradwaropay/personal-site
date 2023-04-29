import ColorsSource from '~/assets/styles/exports/colors.module.scss';

import { setDeepObject } from './utils';

export const Colors = {
  palette: {},
  theme: {}
};

for (const [key, value] of Object.entries(ColorsSource)) {
  const type = key.split('-')[1];

  switch (type) {
    case 'palette':
      const paletteKeys = key.split('color-palette-').pop()?.split('-') || [];
      // createNestedObject(Palette, paletteKeys, value);
      setDeepObject(Colors.palette, paletteKeys, value);
      break;
    case 'theme':
      const themeKeys = key.split('color-theme-').pop()?.split('-') || [];
      setDeepObject(Colors.theme, themeKeys, value);
    break;
    default:
      break;
  }
}

export const Typpgraphy = {};

export const Motion = {};

export const Layout = {};

