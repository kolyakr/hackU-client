import { User } from "./user.interface";

export interface AuthState {
  user: User;
  token: string | null;
  error: null | string;
  isLoading: boolean;
  isLogined: boolean;
}
