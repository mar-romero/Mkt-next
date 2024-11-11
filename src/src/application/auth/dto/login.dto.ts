
// src/application/auth/dto/login.dto.ts
export interface LoginDTO {
  email: string;
  password: string;
}


export interface LoginResult {
  success: boolean;
  user: {
    id: string;
    email: string;
    token: string;
  };
}
