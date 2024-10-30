// src/infrastructure/services/token-storage.service.ts

export class TokenStorageService {
  private static TOKEN_KEY = 'auth_token';
  private static MAX_AGE = 60 * 60 * 24; 
  static setToken(token: string): void {
    document.cookie = `${this.TOKEN_KEY}=${token}; Path=/; Max-Age=${this.MAX_AGE}; Secure; SameSite=Strict`;
  }

  static getToken(): string | null {
    const name = `${this.TOKEN_KEY}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookie.split(';');

    for (let cookie of cookiesArray) {
      cookie = cookie.trim();
      if (cookie.startsWith(name)) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return null;
  }

  static removeToken(): void {
    document.cookie = `${this.TOKEN_KEY}=; Path=/; Max-Age=0; Secure; SameSite=Strict`;
  }
}
