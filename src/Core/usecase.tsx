export default interface IUseCase<T, P> {
  execute: (params?: P) => Promise<T>;
}
