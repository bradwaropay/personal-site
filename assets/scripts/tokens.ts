import Colors from '~/assets/styles/exports/colors.module.scss';

import { setDeepObject } from './utils';

export const Color = {
  palette: {},
  theme: {}
};

for (const [key, value] of Object.entries(Colors)) {
  const type = key.split('-')[1];

  switch (type) {
    case 'palette':
      const paletteKeys = key.split('color-palette-').pop()?.split('-') || [];
      // createNestedObject(Palette, paletteKeys, value);
      setDeepObject(Color.palette, paletteKeys, value);
      break;
    case 'theme':
      const themeKeys = key.split('color-theme-').pop()?.split('-') || [];
      setDeepObject(Color.theme, themeKeys, value);
    break;
    default:
      break;
  }
}
