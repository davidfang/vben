import type { UserInfo } from '@vben/types';

import type { BaseResponse } from './base';

import { requestClient } from '#/api/request';

/**
 * 获取用户信息
 */
export async function getUserInfoApi() {
  return requestClient.get<BaseResponse<UserInfo>>('/admin/info');
}
