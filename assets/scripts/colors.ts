import Colors from '~/assets/styles/exports/colors.module.scss';

export const Palette: {[key: string]: HexColor} = {};
export const Global: {[key: string]: {[key: string]: HexColor}} = {};
export const Theme: {[key: string]: {[key: string]: {[key: string]: HexColor}}} = {};

for (const [key, value] of Object.entries(Colors)) {
  const type = key.split('-')[1];

  switch (type) {
    case 'palette':
      const newKey = key.split('color-palette-').pop();
      Palette[newKey as keyof typeof Palette] = value as HexColor;
      break;
    case 'global':
      const globalKey = key.split('color-global-').pop()?.split('-');
      if (!!globalKey) Global[globalKey[0]] = { ...Global[globalKey[0]], [globalKey[1]]: value as HexColor};
      break;
      case 'theme':
        const themeKey = key.split('color-theme-').pop()?.split('-');
        if (!!themeKey) {
          if (Theme[themeKey[0]] && Theme[themeKey[0]].hasOwnProperty(themeKey[1])) {
            Theme[themeKey[0]] = {...Theme[themeKey[0]], [themeKey[1]]: {...Theme[themeKey[0]][themeKey[1]], [themeKey[2]]: value as HexColor }}
          } else {
            Theme[themeKey[0]] = {...Theme[themeKey[0]], [themeKey[1]]: {[themeKey[2]]: value as HexColor }}
          }
        }
        break;
    default:
      break;
  }
}

console.log(Theme)