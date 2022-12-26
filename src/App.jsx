import { useRoutes } from "react-router-dom";
import { routers } from "./routers";
import "./assets/style/tailwind.css";
import { Suspense } from "react";
import { Loading } from "./components/Loading";
function App() {
  const element = useRoutes(routers);
  return <Suspense fallback={<Loading />}>{element}</Suspense>;
}
export default App;
