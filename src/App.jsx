import { useRoutes } from "react-router-dom";
import { routers } from "./routers";
import "./assets/style/tailwind.css";
function App() {
  const element = useRoutes(routers);
  return <>{element}</>;
}
export default App;
