import React, { useContext } from "react";
import { AuthGoogleContext } from "../context/AuthGoogle";
import { Outlet, Navigate } from "react-router-dom";

export function PrivateRoutes() {
  const { signed } = useContext(AuthGoogleContext);

  return signed ? <Outlet /> : <Navigate to="/" />;
}
