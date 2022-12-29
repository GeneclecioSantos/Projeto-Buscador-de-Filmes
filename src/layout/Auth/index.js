import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function LoginContainer({ children }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  }, [navigate, token]);

  if (token) {
    return children;
  } else {
    return null;
  }
}

export function LogOff({ children }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setTimeout(() => {
        navigate("/home");
      }, 500);
    }
  }, [navigate, token]);

  if (!token) {
    return children;
  } else {
    return null;
  }
}
