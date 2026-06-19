import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { appConfig } from "@/config/app";
import type { ApiError } from "@/types";
import { getAuthToken, handleUnauthorized } from "@/lib/auth/auth-adapter";

export const apiClient = axios.create({
  baseURL: appConfig.apiBaseUrl,
  timeout: 20_000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await getAuthToken();

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
);

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string; detail?: string; code?: string }>) => {
    const apiError: ApiError = {
      message:
        error.response?.data?.message ??
        error.response?.data?.detail ??
        error.message ??
        "An unexpected API error occurred.",
      status: error.response?.status ?? 500,
      code: error.response?.data?.code,
    };

    if (apiError.status === 401) {
      handleUnauthorized();
    }

    return Promise.reject(apiError);
  },
);
