type DataType =
  | "undefined"
  | "null"
  | "object"
  | "boolean"
  | "number"
  | "string"
  | "function"
  | "symbol"
  | "regexp"
  | "set"
  | "map";

/**
 * 判断给定的值是否属于指定的数据类型
 * @param value 要判断的值
 * @param type 数据类型
 * @returns 如果给定的值属于指定的数据类型，则返回true；否则返回false
 */
export const is = (value: any, type: DataType): value is DataType => {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase() === type;
};

/**
 * 判断数据是否为空对象、空数组或空字符串
 * @param value 待判断的数据
 * @returns 如果数据为空对象、空数组或空字符串则返回 true，否则返回 false
 */
export const isEmpty = (value: string | unknown[] | object) => {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else if (typeof value === "object") {
    return Reflect.ownKeys(value).length === 0;
  } else if (typeof value === "string") {
    return value.trim().length === 0;
  }
  return false;
};

/**
 * 判断一个值是否为 falsify 值：false、-0、0、""、null、undefined、NaN
 * @param value 要判断的值
 * @returns 如果是 falsify 值则返回 true，否则返回 false
 */
export const isFalsy = (value: any) => !value;

/**
 * 深度克隆一个对象或数组
 * @param value - 需要克隆的对象或数组
 * @returns 克隆后的对象或数组
 */
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

/**
 * 获取对象中指定路径的值
 * @param target 目标对象
 * @param path 路径，可以是字符串形式或数组形式
 * @param defaultValue 可选参数，如果路径不存在则返回该值，默认为undefined
 * @returns 对象中指定路径的值，如果路径不存在则返回defaultValue
 */
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

/**
 * 防抖函数，延迟一定时间后执行函数，并防止在延迟时间内多次调用转换为同一函数调用。
 * @param fn - 需要防抖的函数
 * @param delay - 延迟时间，默认为500ms
 * @returns 经防抖处理的函数
 */
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

/**
 * 节流函数，以固定时间间隔间隔执行函数
 * @param fn 要节流的函数
 * @param delay 延迟时间（默认为500ms）
 * @returns 返回一个节流函数
 */
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

/**
 * 生成一个UUID
 * @returns {string} UUID字符串
 */
export const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * 等待指定时间后返回一个Promise
 * @param time 要等待的时间（毫秒）
 * @returns 返回的Promise对象
 */
export const sleep = (time: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
};

/**
 * 格式化货币金额 3000 -> ¥3,000.00
 * @param number 要格式化的数字
 * @param options 国际化选项（可选）
 * @returns 格式化后的货币金额字符串
 */
export const formatCurrency = (number: number, options?: Intl.NumberFormatOptions) => {
  const formatter = new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY", // 美元：USD, 语言设置为"en-US"
    currencySign: "accounting", // currencySign选项启用记帐格式
    ...options,
  });
  return formatter.format(number);
};

/**
 * 格式化数字 3000 -> 3,000
 * @param number 需要格式化的数字
 * @returns 格式化后的数字字符串
 */
export const formatNumber = (number: number) => {
  const formatter = new Intl.NumberFormat();
  return formatter.format(number);
};

/**
 * 将数组分成指定大小的块
 * @param source 数组源
 * @param size 块的大小，默认为1
 * @returns 分块后的数组
 */
export function chunk<T>(source: T[], size = 1) {
  if (size < 1) return [];
  const result = [];
  for (let i = 0, len = source.length; i < len; i += size) {
    result.push(source.slice(i, i + size));
  }
  return result;
}

/**
 * 遍历给定对象并返回除了指定键之外的副本对象
 * @param obj - 要遍历的对象
 * @param keys - 要排除的键列表
 * @returns 排除指定键后的新对象
 */
// export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
//   const result: any = {};
//   for (const key in obj) {
//     if (!keys.includes(key)) {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }
