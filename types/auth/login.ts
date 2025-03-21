export interface LoginData {
  email: string;
  password: string;
}

export type LoginFunction = (params: LoginData) => Promise<{
  sessionData: string | null;
  userName: string | null;
  userId: string | null;
}>;
