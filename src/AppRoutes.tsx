import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { getAuthToken } from "storage";
import { redirect } from "react-router-dom";

const AppRoutes = () => {
  const token = getAuthToken();
  if (!token) {
    redirect("/");
  }
  return (
    <Routes>
      {routes.map(({ route, component }, key) => {
        return (
          <React.Fragment key={key}>
            <Route path={route} element={component} key={key} />
            {/* <AppRoute path={route} element={component} key={key}/> */}
            {/* <Route path={route} element={component} key={key} /> */}
            {/* {subRoutes?.length === 0 ? (
              <Route path={route} element={component} key={key} />
            ) : (
              <React.Fragment key={key}>
                {subRoutes.map(({ route, component }, subKey) => (
                  <Route path={route} element={component} key={subKey} />
                ))}
              </React.Fragment>
            )} */}
          </React.Fragment>
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
