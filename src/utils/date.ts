import dayjs from "dayjs";

export const formatDate = (date?: dayjs.ConfigType, format?: string) => {
  return dayjs(date).format(format);
};
