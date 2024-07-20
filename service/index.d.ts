interface BaseResponse<T> {
  code: number;
  msg: string;
  success: boolean;
  data: T;
}

export { BaseResponse };
