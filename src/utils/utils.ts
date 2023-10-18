export const deepClone = <T = any>(value: T) => {
  if (typeof value !== "object" || value === null) return value;

  const clone = <T>(Array.isArray(value) ? [] : {});
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      clone[key] = deepClone(value[key]);
    }
  }
  return clone;
};

export const get = (target: object, path: string | any[], defaultValue?: any) => {
  let newPath: any[] = [];
  if (Array.isArray(path)) {
    newPath = path;
  } else {
    newPath = path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }
  return (
    newPath.reduce((pre, cur) => {
      return pre && pre[cur];
    }, target) ?? defaultValue
  );
};

export const debounce = <F extends (...args: any[]) => any>(
  fn: F,
  delay: number = 500
) => {
  let timer: NodeJS.Timeout | null = null;
  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

export const throttle = <F extends (...args: any[]) => any>(
  fn: F,
  delay: number = 500
) => {
  let prev = 0;
  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    const now = Date.now();

    if (now - prev > delay) {
      fn.apply(this, args);
      prev = now;
    }
  };
};

export const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const sleep = (time: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
};

export const formatCurrency = (number: number) => {
  const formatter = new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY", // 美元：USD, 语言设置为"en-US"
    currencySign: "accounting", // currencySign选项启用记帐格式
  });
  return formatter.format(number);
};

export const formatNumber = (number: number) => {
  const formatter = new Intl.NumberFormat();
  return formatter.format(number);
};
