// src/lib/auth.ts
import jwt from 'jsonwebtoken';

export async function verifyAuth(token: string) {
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET || 'demo-secret');
    return verified;
  } catch (error) {
    console.log(error)
    throw new Error('Invalid token');
  }
}
