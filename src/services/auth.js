import { api, AUTHENTICATION_API } from "../config/api";

export const authService = {
  login(data) {
    return api.post(`${AUTHENTICATION_API}/login`, data);
  },
  refreshToken(data) {
    return api.post(`${AUTHENTICATION_API}/refresh-token`, data);
  },
};
