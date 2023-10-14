import type { useAppProps } from "antd/es/app/context";

class AntdUtils {
  message: useAppProps["message"] | null = null;
  notification: useAppProps["notification"] | null = null;
  modal: useAppProps["modal"] | null = null;

  init(staticFunction: useAppProps) {
    this.message = staticFunction.message;
    this.notification = staticFunction.notification;
    this.modal = staticFunction.modal;
  }
}

export const antdUtils = new AntdUtils();
