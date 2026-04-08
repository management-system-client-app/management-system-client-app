import axiosInstance from "@/lib/axios";

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type AuthResponse = {
  success: boolean;
  message?: string;
  data?: {
    accessToken: string;
    user?: {
      id: string;
      name: string;
      email: string;
    };
  };
};

export const registerUser = async (
  data: RegisterPayload
): Promise<AuthResponse> => {
  const res = await axiosInstance.post<AuthResponse>(
    "/user/register", 
    data
  );
  return res.data;
};

export const loginUser = async (
  data: LoginPayload
): Promise<AuthResponse> => {
  const res = await axiosInstance.post<AuthResponse>(
    "/auth/login", 
    data
  );
  return res.data;
};