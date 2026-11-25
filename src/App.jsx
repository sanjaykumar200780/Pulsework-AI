import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  // "login" or "register" - decides which page we show
  const [page, setPage] = useState("login");

  if (page === "register") {
    return <Register goToLogin={() => setPage("login")} />;
  }

  return <Login goToRegister={() => setPage("register")} />;
}