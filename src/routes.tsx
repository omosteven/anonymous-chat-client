import Chat from "components/App/Chat/Chat";
import GetStarted from "pages/GetStarted/GetStarted";

export const routes = [
  {
    route: "",
    component: <GetStarted />,
    subRoutes: [],
    title: "",
    icon: "none",
  },
  {
    route: "/chat",
    component: <Chat />,
    subRoutes: [],
    title: "Dashboard",
    icon: "",
  },
];
