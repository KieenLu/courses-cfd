import { message } from "antd";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../config/path";
import {
  clearToken,
  clearUser,
  getUser,
  setToken,
  setUser,
} from "../../pages/utils/token";
import { authService } from "../../services/auth";
import { userService } from "../../services/user";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, _setUser] = useState(getUser);
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      const res = await authService.login(data);
      if (res.data) {
        setToken(res.data);
        const user = await userService.getProfile();
        setUser(user.data);
        _setUser(user.data);
        message.success("Đăng nhập thành công, hãy tận hưởng SpaceDev.vn");
      }
    } catch (err) {
      if (err?.response?.data.message) {
        message.error(err?.response?.data.message);
        navigate(PATH.profile.index);
      }
    }
  };
  const logout = () => {
    clearToken();
    clearUser();
    _setUser(null);
    message.success("Đăng xuất tài khoản thành công.");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
