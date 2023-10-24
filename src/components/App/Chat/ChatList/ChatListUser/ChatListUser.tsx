import "./ChatListUser.scss";
import Message from "../../Messages/Message/Message";

const ChatListUser = (props: {
  handleSelectChat: Function;
  userName?: string;
  userEmail?: string;
  id: string;
  lastMessage?: any;
}) => {
  const { handleSelectChat, id, lastMessage } = props;
  return (
    <div
      className="chat-list-user"
      onClick={() => handleSelectChat({ _id: id })}
    >
      <Message
        sender={"OTHER"}
        message={id}
        date={lastMessage?.content}
        // lastTimestamp={lastMessage?.messageTime}
      />
    </div>
  );
};

export default ChatListUser;
