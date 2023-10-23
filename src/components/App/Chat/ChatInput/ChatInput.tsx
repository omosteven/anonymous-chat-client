import { Button, Input } from "components/ui";
import "./ChatInput.scss";

const ChatInput = () => {
  return (
    <section className="chat-input">
      <Input placeholder="Write Your Message" />
      <Button text="" icon={"send"} />
    </section>
  );
};

export default ChatInput;
