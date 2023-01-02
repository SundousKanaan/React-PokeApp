import Axios, { AxiosRequestConfig } from "axios";

const { CancelToken } = Axios;
export type Config = AxiosRequestConfig & { signal?: AbortSignal };

/**
 * Replace route parameters.
 *
 * Example:
 *  params('/article/{slug}', { params: { slug: 'test123' }}) => ['/article/test123', {}]
 *
 * @param path Path with placeholders: '/article/{slug}'
 * @param config Request config
 */
export function params(
  path: string,
  config?: Config
): [string, AxiosRequestConfig?] {
  let apiPath: string = path;
  let apiConfig = config ? { ...config } : undefined;
  if (config && config.params) {
    apiConfig = { ...config, params: {} };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Object.entries(config.params).forEach(([key, value]: [string, any]) => {
      if (path.indexOf(`{${key}}`) !== -1) {
        apiPath = apiPath.replace(`{${key}}`, value);
      } else {
        (apiConfig as AxiosRequestConfig).params[key] = value;
      }
    });
    if (Object.keys(apiConfig.params).length === 0) {
      delete apiConfig.params;
    }
  }
  if (config && config.signal) {
    delete (apiConfig as Config).signal;
    const controller = CancelToken.source();
    (apiConfig as AxiosRequestConfig).cancelToken = controller.token;
    config.signal.addEventListener("abort", () => controller.cancel());
  }
  if (apiPath.indexOf("{") !== -1) {
    throw new Error(`Missing param for "${path}"`);
  }
  return [apiPath, apiConfig];
}
