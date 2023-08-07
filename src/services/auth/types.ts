export type User = {
  avatar: string;
  id: string;
  email: string;
  isEmailVerified: boolean;
  name: string;
  created: string;
  updated: string;
};

export type SignInRequestData = { email: string; password: string; rememberMe: boolean };

export type SignUpRequestData = { email: string; password: string };
export type SignUpResponseData = { id: string; name: string; email: string };
