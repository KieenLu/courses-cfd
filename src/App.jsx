import { useRoutes } from "react-router-dom";
import { useEffect, useState } from "react";
import { routers } from "./routers";

function App() {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch (err) {
      return null;
    }
  });
  const login = () => {
    setUser({
      name: "Lu Trung Kien",
      avatar: "/img/avt.png",
    });
  };
  const logout = () => {
    setUser();
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  const element = useRoutes(routers(user, login, logout));
  return <>{element}</>;
}
export default App;
