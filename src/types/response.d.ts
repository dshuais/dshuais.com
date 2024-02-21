declare namespace Res {
  /**
   * 返参结构
   */
  type Response<T = any> = {
    code: number;
    data: T;
    msg: string;
  };
}
