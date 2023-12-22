import dayjs from "dayjs";

export const dateFormat = (date?: dayjs.ConfigType, format?: string) => {
  // "" 和 null 是无效日期，0 -> 1970-01-01
  if (!dayjs(date).isValid() || date === 0) return "";
  return dayjs(date).format(format);
};
