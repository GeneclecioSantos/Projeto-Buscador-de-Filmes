import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeFilmes from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import { PrivateRoutes } from "./routes";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoutes />}>
          <Route path="/home" element={<HomeFilmes />} />
        </Route>
      </Routes>
    </div>
  );
}
