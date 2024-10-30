import { TokenStorageService } from '@/domain/services/token-storage.service';
import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

class API {
  api: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.api = instance;
  }

  async get<T>(url: string, options?: AxiosRequestConfig) {
    return await this.api.get<T>(url, options);
  }

  async getWithSearchParams<T, P extends Record<string, string | number | boolean>>(
    url: string,
    params: P,
    options?: AxiosRequestConfig
  ) {
    const searchParams = new URLSearchParams(JSON.parse(JSON.stringify(params)));
    return await this.api.get<T>(`${url}?${searchParams.toString()}`, options);
  }

  async post<T, D = unknown>(url: string, data?: D, options?: AxiosRequestConfig) {
    return await this.api.post<T>(url, data, options);
  }

  async patch<T, D = unknown>(url: string, data?: D, options?: AxiosRequestConfig) {
    return await this.api.patch<T>(url, data, options);
  }

  async delete<T>(url: string, options?: AxiosRequestConfig) {
    return await this.api.delete<T>(url, options);
  }

  async put<T, D = unknown>(url: string, data?: D, options?: AxiosRequestConfig) {
    return await this.api.put<T>(url, data, options);
  }
}

export class AxiosAPI extends API {
  constructor({ domain }: { domain: string }) {
    const instance = axios.create({ baseURL: domain });

    instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      const token = TokenStorageService.getToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    });

    super(instance);
  }
}
