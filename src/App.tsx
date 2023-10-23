import { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AppContext } from "./AppContext";
import AppRoutes from "./AppRoutes";
import { getToken, getUser, storeToken, storeUser } from "./storage";
import "./App.css";
import Layout from "./components/ui/layout";

function App() {
  const [user, setUser] = useState<{
    email: string;
    city: string;
    state: string;
    country: string;
    dateJoined: string;
  }>(getUser());

  const [token, setToken] = useState(getToken());
  const updateUser = (data: any) => {
    storeUser(data);
    setUser(data);
  };

  const updateToken = (token: any) => {
    storeToken(token);
    setToken(token);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        token,
        updateUser,
        updateToken,
      }}
    >
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
      <ToastContainer />
    </AppContext.Provider>
  );
}

export default App;
