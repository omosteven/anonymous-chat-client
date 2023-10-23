import "./ChatListUser.scss";
import Message from "../../Messages/Message/Message";

const ChatListUser = (props: { handleSelectChat: Function }) => {
  const { handleSelectChat } = props;
  return (
    <div className="chat-list-user" onClick={() => handleSelectChat()}>
      <Message sender={"OTHER"} message={"Steven Omole"} date="How are you?" />
    </div>
  );
};

export default ChatListUser;
