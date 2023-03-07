/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */

import axios, { AxiosRequestHeaders } from "axios";
import { TOKEN } from "@/common/const";
import storage from "./storage";
import { message, Modal } from "antd";
// import { baseurl } from '../../config/server.config';
const isBrowser = () => {
  return window && window.document;
};

const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};

const request = axios.create({
  timeout: 1000 * 60 * 60 * 24,
});

/**
 *
 * 判断是绝对路径
 */
const isAbsoluteUrl = (url) => {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

request.interceptors.request.use((config) => {
  const { url } = config;
  if (isBrowser()) {
    const token =
      // '5075ktrERsD9LI+PpNYxNid/NKU0CbYVYxLquhuYIoBTVGuhHQhL97hYpfDODZWtbTwKvZfcGcQkbyVgOBmuIo3lpUcqK97b5co' ||
      storage.get(TOKEN)?.access_token;
    config.headers = { token, ...(config.headers || {}) } as any;
  }
  // 服务端
  else {
    // config.url = isAbsoluteUrl(url) ? url : `${baseurl}${url}`;
  }
  return config;
});

request.interceptors.response.use(
  (response) => {
    if (
      response?.data?.code !== 200 &&
      isBrowser() &&
      response?.data?.message
    ) {
      message.error(response?.data?.data || response?.data?.message);
    }
    return response.data;
  },
  (data) => {
    const status = data?.response?.status;
    if (isBrowser()) {
      if (status === 401) {
      } else {
        message.error(codeMessage[status]);
      }
    }
  }
);

export default request;
