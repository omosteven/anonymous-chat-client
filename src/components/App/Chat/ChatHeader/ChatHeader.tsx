import { Button, Icon } from "components/ui";
import "./ChatHeader.scss";
import { CHAT_STAGES } from "../enums";

const { CHAT_LIST } = CHAT_STAGES;

const ChatHeader = (props: {
  handleChatStage: Function;
  chatStage: string;
}) => {
  const { handleChatStage, chatStage } = props;
  return (
    <section className="chat-header">
      <div>
        {chatStage !== CHAT_LIST && (
          <Icon icon="back" onClick={() => handleChatStage()} />
        )}
        <p>{chatStage === CHAT_LIST ? "Recent Chats" : "Steven Omole"}</p>
      </div>
      {chatStage !== CHAT_LIST ? (
        <div>
          <Icon icon="caret" />
        </div>
      ) : (
        <Button text="New Chat" />
      )}
    </section>
  );
};

export default ChatHeader;
