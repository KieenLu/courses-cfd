import { message } from "antd";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  clearToken,
  clearUser,
  getUser,
  setToken,
  setUser,
} from "../../pages/utils/token";
import { authService } from "../../services/auth";
import { userService } from "../../services/user";
import { handleError } from "@/pages/utils/handleError";
import { useMemo } from "react";
import { useCallback } from "react";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, _setUser] = useState(getUser);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    setUser(user || null);
  }, [user]);
  const login = useCallback(async (data) => {
    try {
      const res = await authService.login(data);
      if (res.data) {
        setToken(res.data);
        await getProfile();
      }
    } catch (err) {
      handleError(err);
    }
  }, []);
  const getProfile = useCallback(async () => {
    const user = await userService.getProfile();
    // setUser(user.data);
    _setUser(user.data);
    message.success("Đăng nhập thành công, hãy tận hưởng SpaceDev.vn");

    if (state?.redirect) {
      navigate(state.redirect);
    }
  }, []);
  const logout = useCallback(() => {
    clearToken();
    clearUser();
    _setUser(null);
    message.success("Đăng xuất tài khoản thành công.");
  }, []);
  const value = useMemo(() => {
    return { user, login, logout, setUser: _setUser, getProfile };
  }, [user, login, logout, _setUser, getProfile]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
