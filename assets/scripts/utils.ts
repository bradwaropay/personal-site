export const hexToRGB = (hex: `#${string}`) => {
  const validate = /^#([0-9a-f]{3}){1,2}$/i;
  return validate.test(hex)
    ? hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
      , (_m, r, g, b) => '#' + r + r + g + g + b + b)
      .substring(1).match(/.{2}/g)
      ?.map(x => parseInt(x, 16))
    : '255,255,255'
}