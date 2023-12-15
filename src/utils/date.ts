import dayjs from "dayjs";

export const dateFormat = (date?: dayjs.ConfigType, format?: string) => {
  if (!dayjs(date).isValid()) return "";
  return dayjs(date).format(format);
};
