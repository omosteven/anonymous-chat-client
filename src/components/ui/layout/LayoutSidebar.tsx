import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../../routes";
import Icon from "../Icon";

const LayoutSidebar = (props: { open: boolean; toggleSidebar: Function }) => {
  const { open } = props;
  const navigate = useNavigate();

  const logOut = () => {
    navigate("/");
  };

  return (
    <ProSidebar className="sidebar" collapsed={!open}>
      <Menu iconShape="square">
        {routes.map(({ title, icon, subRoutes, route }, key) => (
          <div key={key}>
            {icon !== "none" ? (
              <div>
                {subRoutes?.length === 0 ? (
                  <MenuItem
                    icon={
                      <Icon
                        icon={icon}
                        className={`${icon === "signOut" ? "logout" : ""}`}
                      />
                    }
                  >
                    <Link to={route}>{title}</Link>
                  </MenuItem>
                ) : (
                  <SubMenu title={title} icon={<Icon icon={icon} />}>
                    {subRoutes.map(({ subTitle, route }, subKey) => (
                      <MenuItem key={subKey}>
                        <Link to={route}>{subTitle}</Link>
                      </MenuItem>
                    ))}
                  </SubMenu>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
        <MenuItem
          onClick={() => logOut()}
          icon={<Icon icon={"signOut"} className={"logout"} />}
        >
          Logout
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default LayoutSidebar;
