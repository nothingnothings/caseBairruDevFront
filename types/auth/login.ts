export interface LoginData {
  email: string;
  password: string;
}

export type LoginFunction = (
  params: LoginData,
  setError: (message: string | null) => void
) => Promise<{
  sessionData: string | null;
  userName: string | null;
  userId: string | null;
}>;
