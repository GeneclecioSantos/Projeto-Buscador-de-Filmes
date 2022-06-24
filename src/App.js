import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/dashboard/dashboard";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
