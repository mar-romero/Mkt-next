//src\application\auth\errors\login.error.ts
export class LoginError extends Error {
  constructor(public readonly code: string, message: string, public readonly field?: string) {
    super(message);
    this.name = 'LoginError';
  }
}
