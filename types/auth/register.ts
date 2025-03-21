export interface RegisterData {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export type RegisterFunction = (params: RegisterData) => Promise<string | null>;
