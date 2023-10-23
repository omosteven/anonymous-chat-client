import { useAppContext } from "AppContext";

import Icon from "../Icon";

const LayoutHeader = (props: { open: boolean; toggleSidebar: Function }) => {
  const { toggleSidebar, open } = props;
  const { user } = useAppContext();
  const { email } = user;
  return (
    <>
      <header>
       
      </header>
    </>
  );
};

export default LayoutHeader;
