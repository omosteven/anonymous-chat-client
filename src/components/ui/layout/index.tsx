import LayoutHeader from "./LayoutHeader";
import LayoutSidebar from "./LayoutSidebar";
import "./Layout.scss";
import { ReactNode, useState } from "react";
import { useLocation } from "react-router-dom";

const Layout = (props: { children?: ReactNode }) => {
  const { children } = props;
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const { pathname } = useLocation();
  const path = pathname.substring(1);
  const showLayout =
    path.includes("signup") || path.includes("login") || path === "";

  return (
    <>
      {!showLayout ? (
        <>
          <div className="layout">
            <LayoutHeader toggleSidebar={toggleSidebar} open={open} />
            <main className={open ? "main-expand" : ""}>
              <div className="main-inner">{children}</div>
            </main>
          </div>
        </>
      ) : (
        <> {children}</>
      )}
    </>
  );
};

export default Layout;
