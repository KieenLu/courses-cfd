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

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, _setUser] = useState(getUser);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    setUser(user || null);
  }, [user]);
  const login = async (data) => {
    try {
      const res = await authService.login(data);
      if (res.data) {
        setToken(res.data);
        await getProfile();
      }
    } catch (err) {
      handleError(err);
    }
  };
  const getProfile = async () => {
    const user = await userService.getProfile();
    // setUser(user.data);
    _setUser(user.data);
    message.success("Đăng nhập thành công, hãy tận hưởng SpaceDev.vn");

    if (state?.redirect) {
      navigate(state.redirect);
    }
  };
  const logout = () => {
    clearToken();
    clearUser();
    _setUser(null);
    message.success("Đăng xuất tài khoản thành công.");
  };
  return (
    <AuthContext.Provider
      value={{ user, login, logout, setUser: _setUser, getProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
