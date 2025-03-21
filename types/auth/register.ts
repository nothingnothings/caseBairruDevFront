export interface RegisterData {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export type RegisterFunction = (params: RegisterData) => Promise<{
  sessionData: string | null;
  userName: string | null;
  userId: string | null;
}>;
