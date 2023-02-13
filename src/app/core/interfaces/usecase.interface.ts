export interface IUsecase<T, U> {
  execute(model?: T): U;
}
