export interface LoginData {
  email: string;
  password: string;
}

export type LoginFunction = (params: LoginData) => Promise<void>;
