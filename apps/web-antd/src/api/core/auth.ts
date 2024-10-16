import type { BaseResponse } from './base';

import { baseRequestClient, requestClient } from '#/api/request';

export namespace AuthApi {
  /** 登录接口参数 */
  export interface LoginParams {
    password?: string;
    username?: string;
  }

  /** 登录接口返回值 */
  export interface LoginResult {
    accessToken: string;
  }

  // 使用BaseResponse封装LoginResult
  export type LoginResponse = BaseResponse<LoginResult>;

  export interface RefreshTokenResult {
    data: string;
    status: number;
  }

  // 使用BaseResponse封装RefreshTokenResult
  export type RefreshTokenResponse = BaseResponse<RefreshTokenResult>;
}

/**
 * 登录
 */
export async function loginApi(data: AuthApi.LoginParams) {
  return requestClient.post<BaseResponse<AuthApi.LoginResult>>(
    '/admin/login',
    data,
  );
  // return requestClient.post<AuthApi.LoginResult>('/admin/login', data);
}

/**
 * 刷新accessToken
 */
export async function refreshTokenApi() {
  return baseRequestClient.post<AuthApi.RefreshTokenResult>('/auth/refresh', {
    withCredentials: true,
  });
}

/**
 * 退出登录
 */
export async function logoutApi() {
  return baseRequestClient.post('/auth/logout', {
    withCredentials: true,
  });
}

/**
 * 获取用户权限码
 */
export async function getAccessCodesApi() {
  return [];
  return requestClient.get<string[]>('/auth/codes');
}
