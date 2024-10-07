// 定义一个接口，用于表示返回的数据
export interface BaseResponse<T> {
  status: boolean;
  message: string;
  code: number;
  data: T; // 这里使用泛型来表示具体的数据类型
}
