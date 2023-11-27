import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults } from "axios";
import { useCommonStore } from "@/stores/common";

// 扩展axios接口，请求时的配置参数都在类型AxiosRequestConfig中
// 例如：axios.get("/api", { succCode: 10001, showLoading: true })
declare module "axios" {
  interface AxiosRequestConfig {
    succCode?: number;
    withAxiosData?: boolean;
    showLoading?: boolean;
  }
}

class Request {
  private instance: AxiosInstance;
  private abortControllerMap: Map<string, AbortController>;

  constructor(config?: CreateAxiosDefaults) {
    this.instance = axios.create(config);
    this.abortControllerMap = new Map();

    this.instance.interceptors.request.use(config => {
      if (config.url !== "/login") {
        const token = useCommonStore.getState().token;
        if (token) config.headers["x-token"] = token;
      }

      const controller = new AbortController();
      const url = config.url || "";
      config.signal = controller.signal;
      this.abortControllerMap.set(url, controller);

      return config;
    }, Promise.reject);

    this.instance.interceptors.response.use(
      response => {
        const url = response.config.url || "";
        this.abortControllerMap.delete(url);

        const successCode = response.config.succCode ?? 10000;
        const withAxiosData = response.config.withAxiosData ?? false;
        const res = withAxiosData ? response : response.data;
        if (response.data.code !== successCode) {
          return Promise.reject(res);
        }
        return res;
      },
      error => {
        if (error.response) {
          if (error.response.status === 401) {
            useCommonStore.setState({ token: "" });
            const { pathname, search } = window.location;
            window.location.href = `/login?redirect=${pathname + search}`;
          }
        }
        return Promise.reject(error);
      }
    );
  }

  // 取消全部请求
  cancelAllRequest() {
    for (const [, controller] of this.abortControllerMap) {
      controller.abort();
    }
    this.abortControllerMap.clear();
  }

  // 取消指定的请求
  cancelRequest(url: string | string[]) {
    const urlList = Array.isArray(url) ? url : [url];
    for (const _url of urlList) {
      this.abortControllerMap.get(_url)?.abort();
      this.abortControllerMap.delete(_url);
    }
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.instance.request(config);
  }
}

export const request = new Request({
  timeout: 20 * 1000,
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});
