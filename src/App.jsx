import { useRoutes } from "react-router-dom";
import { routers } from "./routers";
import "./assets/style/tailwind.css";
import { Suspense } from "react";
function App() {
  const element = useRoutes(routers);
  return <Suspense fallback={<div>...Loading...</div>}>{element}</Suspense>;
}
export default App;
