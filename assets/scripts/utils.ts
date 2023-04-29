export const debounce = (fn: Function, ms = 250) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export const setDeepObject = (obj: { [key: string]: any }, keys: string[], val: any) => { 
  const lastKey = keys.pop();
  const deepObject = keys.reduce((obj, key) => obj[key] = obj[key] || {}, obj); 
  deepObject[lastKey as keyof typeof obj] = val;
};

export const hexToRGB = (hex: `#${string}`) => {
  const validate = /^#([0-9a-f]{3}){1,2}$/i;
  return validate.test(hex)
    ? hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
      , (_m, r, g, b) => '#' + r + r + g + g + b + b)
      .substring(1).match(/.{2}/g)
      ?.map(x => parseInt(x, 16))
    : '255,255,255'
}

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.substring(1);
}