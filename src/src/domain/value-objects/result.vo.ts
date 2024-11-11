// src/domain/value-objects/result.vo.ts
export class Result<T> {
  private constructor(
    private readonly isSuccess: boolean,
    private readonly error: string | null,
    private readonly value?: T
  ) {}

  public isFailure(): boolean {
    return !this.isSuccess;
  }

  public getError(): string | null {
    return this.error;
  }

  public getValue(): T {
    if (!this.isSuccess) throw new Error('Cannot retrieve value from failed result');
    return this.value as T;
  }

  public static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, null, value);
  }

  public static fail<U>(error: string): Result<U> {
    return new Result<U>(false, error);
  }
}
