import { Button } from "components/ui";
import "./ChatProfileButton.scss";
import { useState } from "react";
import Settings from "components/App/Settings/Settings";

const ChatProfileButton = () => {
  const [showModal, toggleModal] = useState(false);

  return (
    <>
      <section className="chat-profile-button">
        <Button
          text="Update Settings"
          onClick={() => toggleModal(!showModal)}
        />
      </section>
      <Settings isOpen={showModal} onClose={() => toggleModal(false)} />
    </>
  );
};

export default ChatProfileButton;
