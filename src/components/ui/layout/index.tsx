import "./Layout.scss";
import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuthToken } from "storage";

const Layout = (props: { children?: ReactNode }) => {
  const { children } = props;

  const { pathname } = useLocation();
  const path = pathname.substring(1);
  const showLayout =
    path.includes("signup") || path.includes("login") || path === "";

  const token = getAuthToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
      return
    }
  }, [token]);

  return (
    <>
      {!showLayout ? (
        <>
          <div className="layout">
            <main>
              <div className="main-inner">{children}</div>
            </main>
          </div>
        </>
      ) : (
        <> {children}</>
      )}
      <ToastContainer />
    </>
  );
};

export default Layout;
