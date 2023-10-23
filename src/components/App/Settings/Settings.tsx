import { DefaultModal, Input } from "components/ui";
import "./Settings.scss";

const Settings = (props: { isOpen: boolean; onClose: Function }) => {
  return (
    <DefaultModal buttonText="Update" {...props}>
      <section className="settings">
        <h3>Update Settings</h3>
        <Input placeholder="Enter username" label="Username" />
        <Input placeholder="Enter username" label="Address" />
      </section>
    </DefaultModal>
  );
};

export default Settings;
