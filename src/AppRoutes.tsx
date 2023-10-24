import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { getAuthToken } from "storage";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const userToken = getAuthToken() || "";
  const { user } = useSelector((state: any) => state?.auth);

  const isAuthenticated =
    userToken?.length > 0 && Object.keys(user)?.length > 0;

  const currentPath = window.location.pathname;

  return (
    <Routes>
      {routes.map(({ route, component }, key) => {
        return (
          <React.Fragment key={key}>
            <Route
              path={route}
              element={
                currentPath !== "/" ? (
                  isAuthenticated ? (
                    component
                  ) : (
                    <Navigate to="/" />
                  )
                ) : isAuthenticated ? (
                  <Navigate to="/chat" />
                ) : (
                  component
                )
              }
            />
          </React.Fragment>
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
