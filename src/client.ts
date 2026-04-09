import axios, { AxiosError, AxiosInstance } from 'axios';
import { BuildRequestUrlArgs } from './client.types';
import { CryptoQuantApiResponse, CryptoQuantError } from './types/common';

function camelToSnake(value: string): string {
  return value.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

function snakeToCamel(value: string): string {
  return value.replace(/_([a-z])/g, (_, letter: string) => letter.toUpperCase());
}

function convertKeysToSnakeCase(params: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      result[camelToSnake(key)] = value;
    }
  }

  return result;
}

function convertKeysToCamelCase(data: unknown): unknown {
  if (Array.isArray(data)) {
    return data.map(convertKeysToCamelCase);
  }

  if (data !== null && typeof data === 'object') {
    const result: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
      result[snakeToCamel(key)] = convertKeysToCamelCase(value);
    }

    return result;
  }

  return data;
}

function toRecord(params: object): Record<string, unknown> {
  return params as Record<string, unknown>;
}

function buildRequestUrl(config: BuildRequestUrlArgs): string {
  const { baseURL = '', url = '', params } = config;
  const query = params
    ? '?' +
      Object.entries(params as Record<string, unknown>)
        .map(([key, value]) => `${key}=${value}`)
        .join('&')
    : '';

  return `${baseURL}${url}${query}`;
}

class CryptoQuantClient {
  private readonly instance: AxiosInstance;

  constructor(accessToken: string) {
    this.instance = axios.create({
      baseURL: 'https://api.cryptoquant.com',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    this.instance.interceptors.response.use(
      (response) => {
        const body = response.data as CryptoQuantApiResponse<unknown>;

        if (body.status.code !== 200) {
          const requestUrl = buildRequestUrl(response.config);

          throw new CryptoQuantError(body.status.code, body.status.message, requestUrl);
        }

        return response;
      },
      (error: AxiosError<CryptoQuantApiResponse<unknown>>) => {
        if (error.response) {
          const requestUrl = buildRequestUrl(error.config ?? {});
          const body = error.response.data;
          const code = body?.status?.code ?? error.response.status;
          const message = body?.status?.message ?? error.message;

          throw new CryptoQuantError(code, message, requestUrl);
        }

        throw error;
      },
    );
  }

  async get<T>(path: string, params?: object): Promise<T[]> {
    const snakeParams = params ? convertKeysToSnakeCase(toRecord(params)) : undefined;
    const response = await this.instance.get<CryptoQuantApiResponse<T>>(path, {
      params: snakeParams,
    });

    return convertKeysToCamelCase(response.data.result.data) as T[];
  }
}

export { CryptoQuantClient };
