import "./ChatList.scss";
import ChatListUser from "./ChatListUser/ChatListUser";

const ChatList = (props: {
  handleSelectChat: Function;
  setStatus: Function;
}) => {
  const { handleSelectChat } = props;

  return (
    <section className="chat-list">
      {Array.from({ length: 10 })?.map((x, key) => (
        <ChatListUser key={key} handleSelectChat={handleSelectChat} />
      ))}
    </section>
  );
};

export default ChatList;
